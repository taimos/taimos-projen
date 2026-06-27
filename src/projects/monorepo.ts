import { github, javascript, typescript, YamlFile } from 'projen';
import { GitHubAssignApprover } from 'projen-pipelines';

/**
 * The frontend framework an Amplify Hosting application is built with.
 *
 * Selects sensible defaults for the build command, artifact directory and
 * cache paths in the generated `amplify.yml`.
 */
export enum MonorepoAmplifyFramework {
  /** A Next.js app — artifacts in `<appRoot>/.next`, built via `run build`. */
  NEXTJS = 'nextjs',
  /** An Angular app — artifacts in `<appRoot>/dist/<filter>/browser`, built via `run build:${BUILD_ENV}`. */
  ANGULAR = 'angular',
}

/**
 * One AWS Amplify Hosting application served from a workspace package.
 *
 * Renders a single entry under `applications:` in the generated `amplify.yml`.
 * Amplify does not auto-detect PNPM workspaces, so the generated build spec
 * runs `corepack enable` + a root `pnpm install` and pre-builds any shared
 * packages before building the app from its `appRoot` (see ADR-0002).
 */
export interface MonorepoAmplifyApp {
  /**
   * The package path that is the Amplify app root, e.g. `packages/frontend`.
   */
  readonly appRoot: string;

  /**
   * The frontend framework, used to pick build/artifact/cache defaults.
   */
  readonly framework: MonorepoAmplifyFramework;

  /**
   * The pnpm package name to build, used as the `--filter` target,
   * e.g. `deploymon-frontend` or `radball-digital-portal`.
   */
  readonly buildFilter: string;

  /**
   * Workspace packages to build before the app, as `--filter` targets.
   *
   * Typically the shared API package the app consumes via `workspace:*`,
   * e.g. `['@taimos/deploymon-api']`.
   *
   * @default []
   */
  readonly preBuildFilters?: string[];

  /**
   * Override the build command run in the Amplify `build` phase.
   *
   * @default - `pnpm --filter <buildFilter> run build` for Next.js, or
   * `pnpm --filter <buildFilter> run build:${BUILD_ENV}` for Angular.
   */
  readonly buildCommand?: string;

  /**
   * Override the artifact base directory.
   *
   * @default - `<appRoot>/.next` for Next.js, or
   * `<appRoot>/dist/<buildFilter>/browser` for Angular.
   */
  readonly artifactBaseDirectory?: string;

  /**
   * Override the Amplify build cache paths.
   *
   * @default - `node_modules/**` plus the framework build cache
   * (`<appRoot>/.next/cache/**` or `<appRoot>/.angular/cache/**`).
   */
  readonly cachePaths?: string[];
}

/**
 * PNPM workspace tuning for the generated `pnpm-workspace.yaml`.
 */
export interface MonorepoWorkspaceOptions {
  /**
   * The workspace package globs.
   *
   * @default ['packages/*']
   */
  readonly packages?: string[];

  /**
   * Version overrides forced across the whole workspace
   * (the `overrides:` field). Omitted from the file when empty.
   *
   * @default {}
   */
  readonly overrides?: { [name: string]: string };

  /**
   * Dependencies allowed to run install/build scripts. pnpm >= 10 blocks these
   * by default. The list populates both `allowBuilds` and
   * `onlyBuiltDependencies` so pnpm does not treat `node_modules` as stale.
   *
   * @default ['@aws-amplify/cli', 'esbuild', 'sharp', 'unrs-resolver']
   */
  readonly allowedBuilds?: string[];

  /**
   * Minimum age in minutes a published version must have before it may be
   * installed (`minimumReleaseAge`).
   *
   * @default 2880 // 2 days
   */
  readonly minimumReleaseAge?: number;

  /**
   * Packages exempt from `minimumReleaseAge` so our own tooling can update
   * without the cooldown.
   *
   * @default ['projen-pipelines', 'cdk-serverless', '@taimos/projen']
   */
  readonly minimumReleaseAgeExclude?: string[];
}

/**
 * One author-to-approvers routing rule for the PR approver assignment.
 */
export interface MonorepoApproverMapping {
  /**
   * The GitHub username opening the PR.
   */
  readonly author: string;

  /**
   * The GitHub usernames assigned to review when `author` opens a PR.
   */
  readonly approvers: string[];
}

export interface MonorepoProjectOptions extends typescript.TypeScriptProjectOptions {
  /**
   * The pnpm version pinned for the workspace and CI.
   *
   * @default '10.33.0'
   */
  readonly pnpmWorkspaceVersion?: string;

  /**
   * The Node.js version used in the generated build workflow.
   *
   * @default '22'
   */
  readonly nodeVersion?: string;

  /**
   * PNPM workspace tuning for the generated `pnpm-workspace.yaml`.
   */
  readonly workspaceOptions?: MonorepoWorkspaceOptions;

  /**
   * Whether to add `cdk-serverless` as a workspace dev dependency.
   *
   * @default false
   */
  readonly cdkServerless?: boolean;

  /**
   * Whether to assign PR approvers via `GitHubAssignApprover`.
   *
   * @default true
   */
  readonly assignApprover?: boolean;

  /**
   * Author-to-approvers routing for the PR approver assignment.
   * Only used when `assignApprover` is enabled.
   *
   * @default - hoegertn and hoegerma review each other
   */
  readonly approverMapping?: MonorepoApproverMapping[];

  /**
   * Approvers assigned when no author-specific mapping matches.
   * Only used when `assignApprover` is enabled.
   *
   * @default ['hoegertn', 'hoegerma']
   */
  readonly defaultApprovers?: string[];

  /**
   * Whether the unified build workflow also runs `pnpm -r run test`.
   *
   * @default true
   */
  readonly runTestsInBuild?: boolean;

  /**
   * AWS Amplify Hosting applications. When set, an `amplify.yml` is generated
   * with one entry per app. When omitted, no `amplify.yml` is created.
   *
   * @default []
   */
  readonly amplifyApps?: MonorepoAmplifyApp[];
}

/**
 * Private PNPM-workspace monorepo root, following Taimos ADR-0002.
 *
 * The root only orchestrates the workspace — building, testing and linting are
 * delegated to the workspace packages via `pnpm -r`. This project generates the
 * `pnpm-workspace.yaml`, the root convenience scripts, a unified PR build
 * workflow and (optionally) an Amplify Hosting build spec. The projen-managed
 * sub-projects (api, backend, infra) are added with the `parent`/`outdir`
 * pattern in the consuming `.projenrc.ts`; plain workspace packages (e.g.
 * Next.js apps) are picked up by the `packages/*` glob.
 *
 * @pjid taimos-monorepo
 */
export class MonorepoProject extends typescript.TypeScriptProject {

  /** The generated `pnpm-workspace.yaml`. */
  public readonly workspaceFile: YamlFile;

  /** The unified PR build workflow. */
  public readonly prBuildWorkflow: github.GithubWorkflow;

  /** The generated `amplify.yml`, if any Amplify apps were configured. */
  public readonly amplifyFile?: YamlFile;

  /** The PR approver assignment, if enabled. */
  public readonly assignApprover?: GitHubAssignApprover;

  constructor(options: MonorepoProjectOptions) {
    const pnpmVersion = options.pnpmWorkspaceVersion ?? '10.33.0';

    super({
      licensed: false,
      release: false,
      depsUpgrade: false,
      // The root only orchestrates the workspace — no app code lives here.
      jest: false,
      eslint: false,
      sampleCode: false,
      // CI is the single hand-rolled workflow below that delegates to packages.
      buildWorkflow: false,
      ...options,
      // Forced — defining what a Taimos monorepo root is.
      packageManager: javascript.NodePackageManager.PNPM,
      pnpmVersion,
      projenrcTs: true,
      github: true,
      githubOptions: {
        projenCredentials: github.GithubCredentials.fromApp(),
        mergify: false,
        mergeQueue: true,
        ...options.githubOptions,
        mergeQueueOptions: {
          autoQueue: true,
          ...options.githubOptions?.mergeQueueOptions,
        },
        pullRequestLintOptions: {
          ...options.githubOptions?.pullRequestLintOptions,
          semanticTitleOptions: {
            ...options.githubOptions?.pullRequestLintOptions?.semanticTitleOptions,
            // Fixed allowed PR title types for a Taimos monorepo.
            types: ['feat', 'fix', 'chore', 'docs', 'spec', 'ci'],
          },
        },
      },
      devDeps: [
        '@taimos/projen',
        'projen-pipelines',
        ...(options.cdkServerless ?? false ? ['cdk-serverless'] : []),
        ...options.devDeps ?? [],
      ],
    });

    // Private workspace root — never published, resolves packages locally.
    this.package.addField('private', true);

    // PR approver routing.
    if (options.assignApprover ?? true) {
      this.assignApprover = new GitHubAssignApprover(this, {
        approverMapping: options.approverMapping ?? [
          { author: 'hoegertn', approvers: ['hoegerma'] },
          { author: 'hoegerma', approvers: ['hoegertn'] },
        ],
        defaultApprovers: options.defaultApprovers ?? ['hoegertn', 'hoegerma'],
      });
    }

    // The projenrc is split into modules under .projen/ — make them part of the
    // dev tsconfig so the IDE and ts-node type-check them.
    this.tsconfigDev?.addInclude('.projen/*.ts');

    // pnpm workspace definition.
    const ws = options.workspaceOptions ?? {};
    const allowedBuilds = ws.allowedBuilds ?? ['@aws-amplify/cli', 'esbuild', 'sharp', 'unrs-resolver'];
    const allowBuilds: { [name: string]: boolean } = {};
    for (const dep of allowedBuilds) {
      allowBuilds[dep] = true;
    }
    this.workspaceFile = new YamlFile(this, 'pnpm-workspace.yaml', {
      obj: {
        packages: ws.packages ?? ['packages/*'],
        // Allow native/build-step packages to run install scripts (pnpm >= 10
        // blocks these by default), so pnpm does not treat node_modules as stale.
        allowBuilds,
        onlyBuiltDependencies: allowedBuilds,
        ...(ws.overrides && Object.keys(ws.overrides).length > 0 ? { overrides: ws.overrides } : {}),
        minimumReleaseAge: ws.minimumReleaseAge ?? 2880, // 2 days in minutes
        minimumReleaseAgeExclude: ws.minimumReleaseAgeExclude ?? [
          'projen-pipelines',
          'cdk-serverless',
          '@taimos/projen',
        ],
      },
    });

    // Convenience root scripts delegate to the workspace.
    const rootPkg = this.tryFindObjectFile('package.json')!;
    rootPkg.addOverride('scripts.build', 'pnpm -r run build');
    rootPkg.addOverride('scripts.test', 'pnpm -r run test');
    rootPkg.addOverride('scripts.lint', 'pnpm -r run eslint');

    // Unified PR build workflow — builds (and optionally tests) every workspace
    // package in dependency order.
    const nodeVersion = options.nodeVersion ?? '22';
    const buildSteps: github.workflows.JobStep[] = [
      { name: 'Checkout', uses: 'actions/checkout@v4' },
      { name: 'Setup pnpm', uses: 'pnpm/action-setup@v4', with: { version: pnpmVersion } },
      {
        name: 'Setup Node.js',
        uses: 'actions/setup-node@v4',
        with: { 'node-version': nodeVersion, 'cache': 'pnpm' },
      },
      { name: 'Install', run: 'pnpm install --frozen-lockfile' },
      { name: 'Build', run: 'pnpm -r run build' },
    ];
    if (options.runTestsInBuild ?? true) {
      buildSteps.push({ name: 'Test', run: 'pnpm -r run test' });
    }
    // Path filter: only trigger builds when workspace package files or
    // build-relevant root configuration changes. Changes to specs or docs
    // alone should not trigger a new build.
    const workspacePackages = ws.packages ?? ['packages/*'];
    const buildPaths: string[] = [
      // Workspace package source files.
      ...workspacePackages.map((pkg) => `${pkg}/**`),
      // Dependency lock & workspace configuration.
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
      // Root package.json (scripts, devDeps, engines).
      'package.json',
      // Projen configuration — regenerates project files.
      '.projenrc.ts',
      '.projenrc.js',
      // Shared TypeScript configuration.
      'tsconfig.json',
      'tsconfig.*.json',
      // The build workflow itself.
      '.github/workflows/build.yml',
      // Shared lint configuration.
      '.eslintrc.*',
      'eslint.config.*',
    ];

    this.prBuildWorkflow = new github.GithubWorkflow(this.github!, 'build');
    this.prBuildWorkflow.on({
      pullRequest: { paths: buildPaths },
      push: { branches: ['main'], paths: buildPaths },
      workflowDispatch: {},
    });
    this.prBuildWorkflow.addJob('build', {
      runsOn: ['ubuntu-latest'],
      permissions: { contents: github.workflows.JobPermission.READ },
      steps: buildSteps,
    });

    // AWS Amplify Hosting build spec. PNPM workspaces are not auto-detected by
    // Amplify, so each app installs at the repo root, pre-builds its shared
    // packages, then builds from its appRoot (see ADR-0002).
    if (options.amplifyApps && options.amplifyApps.length > 0) {
      this.amplifyFile = new YamlFile(this, 'amplify.yml', {
        obj: {
          version: 1,
          applications: options.amplifyApps.map((app) => this.renderAmplifyApp(app)),
        },
      });
    }
  }

  private renderAmplifyApp(app: MonorepoAmplifyApp) {
    const angular = app.framework === MonorepoAmplifyFramework.ANGULAR;
    const preBuild = [
      'corepack enable',
      // Force pnpm's hoisted linker for the Amplify build only — Amplify's
      // managed compute traces runtime deps from a flat node_modules.
      'pnpm install --frozen-lockfile --node-linker hoisted',
      ...(app.preBuildFilters ?? []).map((f) => `pnpm --filter ${f} run build`),
    ];
    // BUILD_ENV (dev|prod) is provided as an Amplify environment variable.
    const buildCommand = app.buildCommand ?? (angular
      ? `pnpm --filter ${app.buildFilter} run build:\${BUILD_ENV}`
      : `pnpm --filter ${app.buildFilter} run build`);
    const baseDirectory = app.artifactBaseDirectory ?? (angular
      ? `${app.appRoot}/dist/${app.buildFilter}/browser`
      : `${app.appRoot}/.next`);
    const cachePaths = app.cachePaths ?? [
      'node_modules/**/*',
      angular ? `${app.appRoot}/.angular/cache/**/*` : `${app.appRoot}/.next/cache/**/*`,
    ];
    return {
      appRoot: app.appRoot,
      frontend: {
        // Install/build from the monorepo root so the workspace root
        // package.json and pnpm-lock.yaml are available.
        buildPath: '/',
        phases: {
          preBuild: { commands: preBuild },
          build: { commands: [buildCommand] },
        },
        artifacts: { baseDirectory, files: ['**/*'] },
        cache: { paths: cachePaths },
      },
    };
  }
}
