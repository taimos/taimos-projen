import { Testing } from 'projen';
import { TaimosApiLibrary } from '../src';

function synth(project: any): Record<string, any> {
  return Testing.synth(project) as Record<string, any>;
}

describe('TaimosApiLibrary (#388)', () => {
  test('REST-only wires the rest codegen task, tsconfig paths and jest mapper', () => {
    const api = new TaimosApiLibrary({ name: '@taimos/test-api', defaultReleaseBranch: 'main' });
    const out = synth(api);

    // Testing.synth returns .json files already parsed into objects.
    const tasks = out['.projen/tasks.json'];
    expect(tasks.tasks['generate:api:rest']).toBeDefined();
    expect(tasks.tasks['generate:api:rest'].steps[0].exec).toContain('openapi-typescript rest.yaml');
    expect(tasks.tasks['generate:api:graphql']).toBeUndefined();

    const tsconfig = out['tsconfig.json'];
    expect(tsconfig.compilerOptions.paths['@generated/*']).toEqual(['./src/generated/*']);
    expect(tsconfig.compilerOptions.paths['@util/*']).toEqual(['./src/util/*']);

    const pkg = out['package.json'];
    expect(pkg.jest.moduleNameMapper['^@generated/(.*)$']).toBe('<rootDir>/src/generated/$1');
  });

  test('GraphQL emits the graphql task and graphql-codegen.yml with the AWS scalar map', () => {
    const api = new TaimosApiLibrary({
      name: '@taimos/test-api',
      defaultReleaseBranch: 'main',
      graphql: true,
    });
    const out = synth(api);

    const tasks = out['.projen/tasks.json'];
    expect(tasks.tasks['generate:api:graphql']).toBeDefined();

    // graphql-codegen.yml is a YAML file — returned as a string.
    const codegen = out['graphql-codegen.yml'] as string;
    expect(codegen).toBeDefined();
    expect(codegen).toContain('AWSDateTime');
    expect(codegen).toContain('AWSJSON');
  });

  test('REST can be disabled', () => {
    const api = new TaimosApiLibrary({ name: '@taimos/test-api', defaultReleaseBranch: 'main', rest: false });
    const out = synth(api);
    const tasks = out['.projen/tasks.json'];
    expect(tasks.tasks['generate:api:rest']).toBeUndefined();
  });

  test('does not release to npm (workspace-internal)', () => {
    const api = new TaimosApiLibrary({ name: '@taimos/test-api', defaultReleaseBranch: 'main' });
    const out = synth(api);
    expect(out['.github/workflows/release.yml']).toBeUndefined();
  });
});
