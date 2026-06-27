import { Testing, typescript } from 'projen';
import * as yaml from 'yaml';
import { GitHubProductionRelease, MonorepoProject, MonorepoProjectOptions } from '../src';

function synthMonorepo(opts: Partial<MonorepoProjectOptions> = {}) {
  const project = new MonorepoProject({
    name: 'test-monorepo',
    defaultReleaseBranch: 'main',
    ...opts,
  });
  // Access the in-memory file map without writing to disk.
  return Testing.synth(project) as Record<string, any>;
}

describe('GitHubProductionRelease', () => {
  test('is opt-in: no workflow by default', () => {
    const out = synthMonorepo();
    expect(out['.github/workflows/production-release.yml']).toBeUndefined();
  });

  test('promotes main to production by default', () => {
    const out = synthMonorepo({ productionRelease: true });
    const wf = yaml.parse(out['.github/workflows/production-release.yml']);

    // workflow_dispatch only — a single target needs no choice input.
    expect(Object.keys(wf.on)).toEqual(['workflow_dispatch']);
    expect(wf.on.workflow_dispatch ?? {}).not.toHaveProperty('inputs');

    const job = wf.jobs['merge-to-production'];
    expect(job.permissions.contents).toBe('write');
    expect(job.env.TARGET_BRANCH).toBe('production');

    const runs = job.steps.map((s: any) => s.run).filter(Boolean).join('\n');
    expect(runs).toContain('git checkout "$TARGET_BRANCH"');
    expect(runs).toContain('git merge --ff-only "origin/main"');
    expect(runs).toContain('git push origin "$TARGET_BRANCH"');

    // Uses the default GITHUB_TOKEN — no app token, just the merge.
    expect(job.steps.find((s: any) => s.id === 'generate_token')).toBeUndefined();
    const checkout = job.steps.find((s: any) => s.uses?.includes('actions/checkout'));
    expect(checkout.with).not.toHaveProperty('token');
  });

  test('renders a choice input for multiple production branches', () => {
    const out = synthMonorepo({
      productionRelease: true,
      productionReleaseOptions: { productionBranches: ['production', 'production2'] },
    });
    const wf = yaml.parse(out['.github/workflows/production-release.yml']);

    const input = wf.on.workflow_dispatch.inputs.target;
    expect(input.type).toBe('choice');
    expect(input.options).toEqual(['production', 'production2']);
    expect(input.default).toBe('production');

    const job = wf.jobs['merge-to-production'];
    expect(job.env.TARGET_BRANCH).toBe('${{ inputs.target }}');
  });

  test('promotes the project default release branch as source', () => {
    const out = synthMonorepo({
      defaultReleaseBranch: 'trunk',
      productionRelease: true,
      productionReleaseOptions: { productionBranches: ['live'] },
    });
    const wf = yaml.parse(out['.github/workflows/production-release.yml']);
    const job = wf.jobs['merge-to-production'];

    expect(job.env.TARGET_BRANCH).toBe('live');
    const runs = job.steps.map((s: any) => s.run).filter(Boolean).join('\n');
    expect(runs).toContain('git merge --ff-only "origin/trunk"');
  });

  test('requires GitHub to be enabled on the project', () => {
    const project = new typescript.TypeScriptProject({
      name: 'no-github',
      defaultReleaseBranch: 'main',
      github: false,
    });
    expect(() => new GitHubProductionRelease(project)).toThrow(/GitHub enabled/);
  });
});
