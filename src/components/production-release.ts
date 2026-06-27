import { Component, github } from 'projen';
import { GitHubProject } from 'projen/lib/github';

export interface GitHubProductionReleaseOptions {
  /**
   * The production branches that the source branch may be promoted into.
   *
   * Each branch typically backs its own production deployment — e.g. one Amplify
   * app tracking `production` and another tracking `production2`. When more than
   * one branch is given, the `workflow_dispatch` trigger exposes a `target`
   * choice input so the operator picks which branch to promote into at dispatch
   * time. The first entry is the default selection. With a single branch, no
   * input is rendered and that branch is always the target.
   *
   * @default ['production']
   */
  readonly productionBranches?: string[];

  /**
   * The name of the generated workflow (and its `.yml` file).
   *
   * @default 'production-release'
   */
  readonly workflowName?: string;

  /**
   * The runner tags used to select the runner.
   *
   * @default ['ubuntu-latest']
   */
  readonly runnerTags?: string[];
}

/**
 * Adds a manual "Production Release" workflow that promotes a branch into a
 * production branch.
 *
 * The workflow is triggered via `workflow_dispatch`. It fast-forward merges the
 * project's default release branch into the selected production branch and
 * pushes it. This keeps a production promotion a deliberate, auditable manual
 * action separate from merging to the default release branch. When several
 * production branches are configured, the operator chooses the target at
 * dispatch time.
 */
export class GitHubProductionRelease extends Component {

  /**
   * Resolves the branch that is promoted — the project's default release branch.
   *
   * `NodeProject` does not expose the configured default release branch as a
   * public field, so this reads the best available source: a project that
   * exposes `defaultReleaseBranch` (e.g. `MonorepoProject`), then the release
   * component's default branch, falling back to `main`.
   */
  private static resolveDefaultReleaseBranch(scope: GitHubProject): string {
    const anyScope = scope as any;
    return anyScope.defaultReleaseBranch
      ?? anyScope.release?.defaultBranch
      ?? 'main';
  }

  /** The generated production release workflow. */
  public readonly workflow: github.GithubWorkflow;

  constructor(scope: GitHubProject, options: GitHubProductionReleaseOptions = {}) {
    super(scope);

    if (!scope.github) {
      throw new Error('GitHubProductionRelease requires a project with GitHub enabled');
    }

    const sourceBranch = GitHubProductionRelease.resolveDefaultReleaseBranch(scope);
    const productionBranches = options.productionBranches ?? ['production'];
    if (productionBranches.length === 0) {
      throw new Error('GitHubProductionRelease requires at least one production branch');
    }
    const workflowName = options.workflowName ?? 'production-release';
    const runnerTags = options.runnerTags ?? ['ubuntu-latest'];

    const multipleTargets = productionBranches.length > 1;

    this.workflow = new github.GithubWorkflow(scope.github, workflowName);
    this.workflow.on({
      workflowDispatch: multipleTargets ? {
        inputs: {
          target: {
            description: `Production branch to promote ${sourceBranch} into`,
            type: 'choice',
            options: productionBranches,
            default: productionBranches[0],
            required: true,
          },
        },
      } : {},
    });

    // The target branch is read from an env var rather than interpolated into a
    // run script, so the dispatch input cannot be used for shell injection.
    const targetRef = multipleTargets ? '${{ inputs.target }}' : productionBranches[0];

    this.workflow.addJob('merge-to-production', {
      name: 'Promote to production',
      runsOn: runnerTags,
      permissions: { contents: github.workflows.JobPermission.WRITE },
      env: { TARGET_BRANCH: targetRef },
      steps: [
        {
          name: 'Checkout repository',
          uses: 'actions/checkout@v4',
          with: { 'fetch-depth': 0 },
        },
        {
          name: 'Configure git',
          run: [
            'git config user.name "github-actions[bot]"',
            'git config user.email "github-actions[bot]@users.noreply.github.com"',
          ].join('\n'),
        },
        {
          name: 'Fetch all branches',
          run: 'git fetch --all',
        },
        {
          name: 'Checkout production branch',
          run: 'git checkout "$TARGET_BRANCH"',
        },
        {
          name: `Merge ${sourceBranch} (fast-forward only)`,
          run: `git merge --ff-only "origin/${sourceBranch}"`,
        },
        {
          name: 'Push to production branch',
          run: 'git push origin "$TARGET_BRANCH"',
        },
      ],
    });
  }
}
