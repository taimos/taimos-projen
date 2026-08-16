import { Testing } from 'projen';
import * as yaml from 'yaml';
import { AmplifyDeployApp, AmplifyDeployStage, GitHubAmplifyDeployOptions, MonorepoProject, MonorepoProjectOptions } from '../src';

const STAGES: AmplifyDeployStage[] = [
  { branch: 'main', stageName: 'dev', account: '111111111111' },
  { branch: 'production', stageName: 'prod', account: '222222222222' },
];

const PORTAL: AmplifyDeployApp = {
  key: 'portal',
  appRoot: 'packages/portal',
  dependencyPaths: ['packages/api/**'],
};

const DOCS: AmplifyDeployApp = { key: 'docs', appRoot: 'packages/docs' };

const DEPLOYMENT_ROLE_ARN = 'arn:aws:iam::999999999999:role/GitHubDeployment-test-main';

function synthMonorepo(opts: Partial<MonorepoProjectOptions> = {}) {
  const project = new MonorepoProject({
    name: 'test-monorepo',
    defaultReleaseBranch: 'main',
    ...opts,
  });
  return Testing.synth(project) as Record<string, any>;
}

function synthDeploy(options: Partial<GitHubAmplifyDeployOptions> = {}) {
  return synthMonorepo({
    amplifyDeployOptions: {
      apps: [PORTAL, DOCS],
      stages: STAGES,
      deploymentRoleArn: DEPLOYMENT_ROLE_ARN,
      ...options,
    },
  });
}

describe('GitHubAmplifyDeploy', () => {
  test('is opt-in: no workflows by default', () => {
    const out = synthMonorepo();
    expect(out['.github/workflows/portal-deploy.yml']).toBeUndefined();
  });

  test('generates one workflow per app, named <key>-deploy', () => {
    const out = synthDeploy();
    expect(out['.github/workflows/portal-deploy.yml']).toBeDefined();
    expect(out['.github/workflows/docs-deploy.yml']).toBeDefined();
  });

  test('triggers only on the app root, its dependencies and the shared build inputs', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/portal-deploy.yml']);

    expect(wf.on.push.branches).toEqual(['main', 'production']);
    expect(wf.on.push.paths).toEqual([
      'packages/portal/**',
      'packages/api/**',
      'amplify.yml',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
      '.github/workflows/portal-deploy.yml',
    ]);
    // A manual redeploy after a build-only failure must not need a dummy commit.
    expect(wf.on).toHaveProperty('workflow_dispatch');
  });

  test('an app without dependencies triggers on its own root only', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/docs-deploy.yml']);
    expect(wf.on.push.paths).not.toContain('packages/api/**');
    expect(wf.on.push.paths).toContain('packages/docs/**');
  });

  test('maps each branch to its stage and account, and rejects any other branch', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/portal-deploy.yml']);
    const resolve = wf.jobs.deploy.steps.find((s: any) => s.id === 'stage').run;

    expect(resolve).toContain("main) stage='dev'; account='111111111111'");
    expect(resolve).toContain("production) stage='prod'; account='222222222222'");
    expect(resolve).toContain('arn:aws:iam::$account:role/test-monorepo-amplify-build-trigger');
    // An unexpected branch fails loudly rather than deploying somewhere random.
    expect(resolve).toContain('is not a deploy branch');
  });

  test('uses the per-stage GitHub environment so protection rules apply', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/portal-deploy.yml']);
    expect(wf.jobs.deploy.environment).toBe(
      "${{ github.ref_name == 'production' && 'prod' || 'dev' }}",
    );
  });

  test('chains the deployment role into the build-trigger role without session tagging', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/portal-deploy.yml']);
    const steps = wf.jobs.deploy.steps;

    const first = steps.find((s: any) => s.id === 'aws_credentials_deployment_role');
    expect(first.with['role-to-assume']).toBe(DEPLOYMENT_ROLE_ARN);
    expect(first.with).not.toHaveProperty('role-chaining');

    const second = steps.find((s: any) => s.id === 'aws_credentials_amplify_build_trigger');
    expect(second.with['role-to-assume']).toBe('${{ steps.stage.outputs.role_arn }}');
    expect(second.with['role-chaining']).toBe(true);
    // The trust policy grants AssumeRole only; tagging would turn the chained
    // call into AssumeRole + TagSession and fail the step.
    expect(second.with['role-skip-session-tagging']).toBe(true);
  });

  test('reads the app id from SSM rather than hardcoding it', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/portal-deploy.yml']);
    const start = wf.jobs.deploy.steps.find((s: any) => s.id === 'start').run;

    expect(start).toContain("aws ssm get-parameter --name '/test-monorepo/amplify/portal/app-id'");
    expect(start).toContain('--job-type RELEASE');
  });

  test('fails the workflow when the Amplify build fails', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/portal-deploy.yml']);
    const wait = wf.jobs.deploy.steps.find((s: any) => s.id === 'wait_for_build_to_finish').run;

    expect(wait).toContain('aws amplify get-job');
    expect(wait).toContain('FAILED|CANCELLED)');
    expect(wait).toContain('exit 1');
  });

  test('queues concurrent runs instead of orphaning a started Amplify job', () => {
    const wf = yaml.parse(synthDeploy()['.github/workflows/portal-deploy.yml']);
    expect(wf.jobs.deploy.concurrency['cancel-in-progress']).toBe(false);
    expect(wf.jobs.deploy['timeout-minutes']).toBe(45);
  });

  test('a single account serving several branches is expressible', () => {
    const out = synthDeploy({
      stages: [
        { branch: 'main', stageName: 'dev', account: '111111111111' },
        { branch: 'production', stageName: 'prod', account: '111111111111' },
      ],
    });
    const resolve = yaml.parse(out['.github/workflows/portal-deploy.yml'])
      .jobs.deploy.steps.find((s: any) => s.id === 'stage').run;

    expect(resolve).toContain("main) stage='dev'; account='111111111111'");
    expect(resolve).toContain("production) stage='prod'; account='111111111111'");
  });

  test('role name, parameter prefix, region and workflow name are overridable', () => {
    const out = synthDeploy({
      apps: [{ ...PORTAL, workflowName: 'frontend-release', label: 'frontend' }],
      buildTriggerRoleName: 'custom-trigger',
      parameterPrefix: '/custom/amplify',
      region: 'us-east-1',
    });
    const wf = yaml.parse(out['.github/workflows/frontend-release.yml']);

    expect(wf.jobs.deploy.name).toBe('Build and deploy the frontend on Amplify');
    expect(wf.jobs.deploy.steps.find((s: any) => s.id === 'stage').run)
      .toContain('role/custom-trigger');
    expect(wf.jobs.deploy.steps.find((s: any) => s.id === 'start').run)
      .toContain('/custom/amplify/portal/app-id');
    expect(wf.jobs.deploy.steps.find((s: any) => s.id === 'aws_credentials_deployment_role').with['aws-region'])
      .toBe('us-east-1');
  });

  test('rejects an empty or ambiguous configuration', () => {
    expect(() => synthDeploy({ apps: [] })).toThrow(/at least one app/);
    expect(() => synthDeploy({ stages: [] })).toThrow(/at least one stage/);
    expect(() => synthDeploy({ apps: [PORTAL, PORTAL] })).toThrow(/app keys must be unique/);
    expect(() => synthDeploy({ stages: [STAGES[0], STAGES[0]] })).toThrow(/branches must be unique/);
  });
});
