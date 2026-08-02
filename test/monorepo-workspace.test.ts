import { Testing } from 'projen';
import * as yaml from 'yaml';
import { MonorepoProject, MonorepoProjectOptions } from '../src';

function getWorkspaceYaml(opts: Partial<MonorepoProjectOptions> = {}) {
  const project = new MonorepoProject({
    name: 'test-monorepo',
    defaultReleaseBranch: 'main',
    ...opts,
  });
  const out = Testing.synth(project) as Record<string, any>;
  return yaml.parse(out['pnpm-workspace.yaml']);
}

describe('MonorepoProject pnpm-workspace.yaml (native projen component)', () => {
  test('renders sensible defaults', () => {
    const ws = getWorkspaceYaml();

    expect(ws.packages).toEqual(['packages/*']);
    // `allowScripts` is rendered into `onlyBuiltDependencies` (sorted).
    expect(ws.onlyBuiltDependencies).toEqual([
      '@aws-amplify/cli',
      'esbuild',
      'sharp',
      'unrs-resolver',
    ]);
    expect(ws.minimumReleaseAge).toBe(2880);
    expect(ws.minimumReleaseAgeExclude).toEqual([
      'projen-pipelines',
      'cdk-serverless',
      '@taimos/projen',
    ]);
    // No overrides by default — the field is omitted, not empty.
    expect(ws).not.toHaveProperty('overrides');
  });

  test('honours workspaceOptions overrides', () => {
    const ws = getWorkspaceYaml({
      workspaceOptions: {
        packages: ['packages/*', 'apps/*'],
        overrides: { 'left-pad': '1.3.0' },
        allowedBuilds: ['esbuild', 'sharp'],
        minimumReleaseAge: 60,
        minimumReleaseAgeExclude: ['@taimos/projen'],
      },
    });

    expect(ws.packages).toEqual(['packages/*', 'apps/*']);
    expect(ws.overrides).toEqual({ 'left-pad': '1.3.0' });
    expect(ws.onlyBuiltDependencies).toEqual(['esbuild', 'sharp']);
    expect(ws.minimumReleaseAge).toBe(60);
    expect(ws.minimumReleaseAgeExclude).toEqual(['@taimos/projen']);
  });

  test('exposes the generated file via workspaceFile', () => {
    const project = new MonorepoProject({
      name: 'test-monorepo',
      defaultReleaseBranch: 'main',
    });
    expect(project.workspaceFile).toBeDefined();
    expect(project.workspaceFile.path).toBe('pnpm-workspace.yaml');
  });
});
