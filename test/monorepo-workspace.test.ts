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
    // ...and mirrored into `allowBuilds`, the key pnpm 11 reads instead.
    expect(ws.allowBuilds).toEqual({
      '@aws-amplify/cli': true,
      'esbuild': true,
      'sharp': true,
      'unrs-resolver': true,
    });
    expect(ws.minimumReleaseAge).toBe(2880);
    expect(ws.minimumReleaseAgeExclude).toEqual([
      'projen-pipelines',
      'cdk-serverless',
      '@taimos/projen',
      'projen',
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
        minimumReleaseAgeExclude: ['my-tool'],
      },
    });

    expect(ws.packages).toEqual(['packages/*', 'apps/*']);
    expect(ws.overrides).toEqual({ 'left-pad': '1.3.0' });
    expect(ws.onlyBuiltDependencies).toEqual(['esbuild', 'sharp']);
    expect(ws.allowBuilds).toEqual({ esbuild: true, sharp: true });
    expect(ws.minimumReleaseAge).toBe(60);
    // Consumer entries MERGE with the defaults (deduped), not replace them.
    expect(ws.minimumReleaseAgeExclude).toEqual([
      'projen-pipelines',
      'cdk-serverless',
      '@taimos/projen',
      'projen',
      'my-tool',
    ]);
  });

  test('dedupes a consumer exclude that repeats a default', () => {
    const ws = getWorkspaceYaml({
      workspaceOptions: { minimumReleaseAgeExclude: ['@taimos/projen', 'my-tool'] },
    });
    expect(ws.minimumReleaseAgeExclude).toEqual([
      'projen-pipelines',
      'cdk-serverless',
      '@taimos/projen',
      'projen',
      'my-tool',
    ]);
  });

  test('lets consumer pnpmOptions win over the defaults', () => {
    const ws = getWorkspaceYaml({
      workspaceOptions: { allowedBuilds: ['esbuild'] },
      pnpmOptions: {
        workspaceYamlOptions: { allowBuilds: { 'esbuild': true, 'better-sqlite3': true } },
      },
    });

    expect(ws.allowBuilds).toEqual({ 'esbuild': true, 'better-sqlite3': true });
  });

  test('exposes the generated file via workspaceFile', () => {
    const project = new MonorepoProject({
      name: 'test-monorepo',
      defaultReleaseBranch: 'main',
    });
    expect(project.workspaceFile).toBeDefined();
    expect(project.workspaceFile.path).toBe('pnpm-workspace.yaml');
  });

  function getBuildWorkflow(opts: Partial<MonorepoProjectOptions> = {}) {
    const project = new MonorepoProject({
      name: 'test-monorepo',
      defaultReleaseBranch: 'main',
      ...opts,
    });
    const out = Testing.synth(project) as Record<string, any>;
    return yaml.parse(out['.github/workflows/build.yml']);
  }

  test('omits the separate Test step by default (runTestsInBuild=false)', () => {
    const wf = getBuildWorkflow();
    const stepNames = wf.jobs.build.steps.map((s: any) => s.name);
    expect(stepNames).toContain('Build');
    expect(stepNames).not.toContain('Test');
  });

  test('adds the Test step when runTestsInBuild is true', () => {
    const wf = getBuildWorkflow({ runTestsInBuild: true });
    const stepNames = wf.jobs.build.steps.map((s: any) => s.name);
    expect(stepNames).toContain('Test');
  });
});
