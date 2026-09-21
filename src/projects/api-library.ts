import { YamlFile } from 'projen';
import { TaimosPrivateTypescriptLibrary, TaimosPrivateTypescriptLibraryOptions } from './private-ts-lib';

/**
 * REST (OpenAPI) codegen options for the shared API library.
 */
export interface ApiRestCodegen {
  /**
   * The OpenAPI spec file, relative to the package root.
   *
   * @default 'rest.yaml'
   */
  readonly specFile?: string;
  /**
   * The generated TypeScript output file.
   *
   * @default 'src/generated/rest.model.generated.ts'
   */
  readonly outputFile?: string;
}

/**
 * GraphQL (graphql-codegen) codegen options for the shared API library.
 */
export interface ApiGraphqlCodegen {
  /**
   * The GraphQL schema files, in order, relative to the package root.
   *
   * @default ['aws.graphql', 'schema.graphql']
   */
  readonly schemaFiles?: string[];
  /**
   * The generated TypeScript output file.
   *
   * @default './src/generated/graphql.model.generated.ts'
   */
  readonly outputFile?: string;
  /**
   * Scalar map passed to graphql-codegen. Defaults to the AppSync scalar set
   * (all mapped to `string`).
   *
   * @default - the AppSync scalar map
   */
  readonly scalars?: { [name: string]: string };
}

export interface TaimosApiLibraryOptions extends TaimosPrivateTypescriptLibraryOptions {
  /**
   * Enable REST (OpenAPI -> TypeScript) codegen via `openapi-typescript`.
   *
   * Pass `true` for defaults, an object to customise, or `false` to disable.
   *
   * @default true
   */
  readonly rest?: boolean | ApiRestCodegen;
  /**
   * Enable GraphQL codegen via `graphql-codegen`.
   *
   * Pass `true` for defaults, an object to customise, or omit to disable. The
   * graphql-codegen v5 / typescript-plugin v4 lines are pinned because v6/v7 are
   * incompatible with graphql 16, which the workspace pins.
   *
   * @default false
   */
  readonly graphql?: boolean | ApiGraphqlCodegen;
}

const DEFAULT_SCALARS: { [name: string]: string } = {
  AWSDate: 'string',
  AWSURL: 'string',
  AWSEmail: 'string',
  AWSTime: 'string',
  AWSDateTime: 'string',
  AWSTimestamp: 'string',
  AWSPhone: 'string',
  AWSIPAddress: 'string',
  AWSJSON: 'string',
};

/**
 * The shared, workspace-internal API/types library for a Taimos monorepo.
 *
 * Owns the canonical contract (OpenAPI and/or GraphQL) and the generated
 * TypeScript types, consumed by the backend and frontends via `workspace:*`.
 * Wires the codegen tasks, the `@generated`/`@util` tsconfig path aliases, and
 * the matching jest `moduleNameMapper` so a consumer does not re-derive them.
 *
 * @pjid taimos-api-library
 */
export class TaimosApiLibrary extends TaimosPrivateTypescriptLibrary {

  constructor(options: TaimosApiLibraryOptions) {
    const restEnabled = options.rest ?? true;
    const graphqlEnabled = options.graphql ?? false;

    const rest: ApiRestCodegen = typeof restEnabled === 'object' ? restEnabled : {};
    const gql: ApiGraphqlCodegen = typeof graphqlEnabled === 'object' ? graphqlEnabled : {};

    super({
      projenrcTs: false,
      sampleCode: false,
      github: false,
      release: false,
      releaseToNpm: false, // workspace-internal; consumed via workspace:*
      licensed: false,
      docgen: false,
      depsUpgrade: false,
      ...options,
      tsconfig: {
        ...options.tsconfig,
        compilerOptions: {
          skipLibCheck: true,
          paths: {
            '@generated/*': ['./src/generated/*'],
            '@util/*': ['./src/util/*'],
            ...options.tsconfig?.compilerOptions?.paths,
          },
          ...options.tsconfig?.compilerOptions,
        },
      },
      jestOptions: {
        ...options.jestOptions,
        jestConfig: {
          ...options.jestOptions?.jestConfig,
          moduleNameMapper: {
            '^@generated/(.*)$': '<rootDir>/src/generated/$1',
            '^@util/(.*)$': '<rootDir>/src/util/$1',
            ...options.jestOptions?.jestConfig?.moduleNameMapper,
          },
        },
      },
      deps: [
        ...(restEnabled ? ['openapi-typescript@^7.0.0'] : []),
        ...(graphqlEnabled ? ['graphql@^16.14.2'] : []),
        ...options.deps ?? [],
      ],
      devDeps: [
        ...(graphqlEnabled ? ['@graphql-codegen/cli@^5.0.0', '@graphql-codegen/typescript@^4.0.0'] : []),
        ...options.devDeps ?? [],
      ],
    });

    if (restEnabled) {
      const specFile = rest.specFile ?? 'rest.yaml';
      const outputFile = rest.outputFile ?? 'src/generated/rest.model.generated.ts';
      const task = this.addTask('generate:api:rest', {
        exec: `openapi-typescript ${specFile} --output ${outputFile}`,
        description: 'Generate TypeScript types from the OpenAPI specification',
      });
      this.preCompileTask.prependSpawn(task);
    }

    if (graphqlEnabled) {
      const configFileName = 'graphql-codegen.yml';
      const outputFile = gql.outputFile ?? './src/generated/graphql.model.generated.ts';
      const task = this.addTask('generate:api:graphql', {
        exec: `graphql-codegen -c ${configFileName}`,
        description: 'Generate Types from the GraphQL specification',
      });
      this.preCompileTask.prependSpawn(task);

      new YamlFile(this, configFileName, {
        obj: {
          schema: gql.schemaFiles ?? ['aws.graphql', 'schema.graphql'],
          config: {
            scalars: gql.scalars ?? DEFAULT_SCALARS,
            maybeValue: 'T | undefined',
          },
          generates: {
            [outputFile]: { plugins: ['typescript'] },
          },
        },
      });
    }
  }
}
