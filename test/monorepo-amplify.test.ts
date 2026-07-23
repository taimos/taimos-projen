import { Testing } from 'projen';
import * as yaml from 'yaml';
import { MonorepoAmplifyFramework, MonorepoProject, MonorepoProjectOptions } from '../src';

function synthMonorepo(opts: Partial<MonorepoProjectOptions> = {}) {
  const project = new MonorepoProject({
    name: 'test-monorepo',
    defaultReleaseBranch: 'main',
    ...opts,
  });
  return Testing.synth(project) as Record<string, any>;
}

function getAmplifyYml(opts: Partial<MonorepoProjectOptions> = {}) {
  const out = synthMonorepo(opts);
  return yaml.parse(out['amplify.yml']);
}

describe('MonorepoProject amplify.yml scoped install', () => {
  test('default install uses --filter with buildFilter and trailing ...', () => {
    const amplify = getAmplifyYml({
      amplifyApps: [{
        appRoot: 'packages/frontend',
        framework: MonorepoAmplifyFramework.NEXTJS,
        buildFilter: 'web-app',
      }],
    });

    const preBuild = amplify.applications[0].frontend.phases.preBuild.commands;
    expect(preBuild).toContain(
      'pnpm install --frozen-lockfile --node-linker hoisted --filter "web-app..."',
    );
  });

  test('no unfiltered full-workspace install is generated', () => {
    const amplify = getAmplifyYml({
      amplifyApps: [{
        appRoot: 'packages/frontend',
        framework: MonorepoAmplifyFramework.NEXTJS,
        buildFilter: 'web-app',
      }],
    });

    const preBuild = amplify.applications[0].frontend.phases.preBuild.commands;
    // Must not contain an unscoped install
    const unscopedInstall = preBuild.find(
      (cmd: string) => cmd.includes('pnpm install') && !cmd.includes('--filter'),
    );
    expect(unscopedInstall).toBeUndefined();
  });

  test('installFilter overrides the default filter expression', () => {
    const amplify = getAmplifyYml({
      amplifyApps: [{
        appRoot: 'packages/frontend',
        framework: MonorepoAmplifyFramework.NEXTJS,
        buildFilter: 'web-app',
        installFilter: '{web-app,shared-api}...',
      }],
    });

    const preBuild = amplify.applications[0].frontend.phases.preBuild.commands;
    expect(preBuild).toContain(
      'pnpm install --frozen-lockfile --node-linker hoisted --filter "{web-app,shared-api}..."',
    );
  });

  test('installCommand fully overrides the install step', () => {
    const customInstall = 'npm ci --legacy-peer-deps';
    const amplify = getAmplifyYml({
      amplifyApps: [{
        appRoot: 'packages/frontend',
        framework: MonorepoAmplifyFramework.NEXTJS,
        buildFilter: 'web-app',
        installCommand: customInstall,
      }],
    });

    const preBuild = amplify.applications[0].frontend.phases.preBuild.commands;
    expect(preBuild).toContain(customInstall);
    // The default pnpm install must not appear
    expect(preBuild.find((cmd: string) => cmd.includes('pnpm install'))).toBeUndefined();
  });

  test('installCommand takes precedence over installFilter', () => {
    const customInstall = 'yarn install --frozen-lockfile';
    const amplify = getAmplifyYml({
      amplifyApps: [{
        appRoot: 'packages/frontend',
        framework: MonorepoAmplifyFramework.NEXTJS,
        buildFilter: 'web-app',
        installFilter: 'should-be-ignored...',
        installCommand: customInstall,
      }],
    });

    const preBuild = amplify.applications[0].frontend.phases.preBuild.commands;
    expect(preBuild).toContain(customInstall);
    expect(preBuild.find((cmd: string) => cmd.includes('should-be-ignored'))).toBeUndefined();
  });

  test('preBuildFilters are preserved after the scoped install', () => {
    const amplify = getAmplifyYml({
      amplifyApps: [{
        appRoot: 'packages/frontend',
        framework: MonorepoAmplifyFramework.NEXTJS,
        buildFilter: 'web-app',
        preBuildFilters: ['@taimos/shared-api'],
      }],
    });

    const preBuild = amplify.applications[0].frontend.phases.preBuild.commands;
    expect(preBuild).toEqual([
      'corepack enable',
      'pnpm install --frozen-lockfile --node-linker hoisted --filter "web-app..."',
      'pnpm --filter @taimos/shared-api run build',
    ]);
  });

  test('Angular app gets scoped install with correct build command', () => {
    const amplify = getAmplifyYml({
      amplifyApps: [{
        appRoot: 'packages/portal',
        framework: MonorepoAmplifyFramework.ANGULAR,
        buildFilter: 'portal-app',
      }],
    });

    const app = amplify.applications[0];
    const preBuild = app.frontend.phases.preBuild.commands;
    expect(preBuild).toContain(
      'pnpm install --frozen-lockfile --node-linker hoisted --filter "portal-app..."',
    );
    expect(app.frontend.phases.build.commands[0]).toBe(
      'pnpm --filter portal-app run build:${BUILD_ENV}',
    );
  });

  test('multiple apps each get their own scoped install', () => {
    const amplify = getAmplifyYml({
      amplifyApps: [
        {
          appRoot: 'packages/app-a',
          framework: MonorepoAmplifyFramework.NEXTJS,
          buildFilter: 'app-a',
        },
        {
          appRoot: 'packages/app-b',
          framework: MonorepoAmplifyFramework.ANGULAR,
          buildFilter: 'app-b',
        },
      ],
    });

    const preBuildA = amplify.applications[0].frontend.phases.preBuild.commands;
    expect(preBuildA).toContain(
      'pnpm install --frozen-lockfile --node-linker hoisted --filter "app-a..."',
    );

    const preBuildB = amplify.applications[1].frontend.phases.preBuild.commands;
    expect(preBuildB).toContain(
      'pnpm install --frozen-lockfile --node-linker hoisted --filter "app-b..."',
    );
  });
});
