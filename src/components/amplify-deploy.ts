import { Component, github } from 'projen';
import { GitHubProject } from 'projen/lib/github';

/**
 * One deploy stage: a git branch, the logical stage it serves, and the AWS
 * account its Amplify apps live in.
 *
 * Both shapes seen in practice are expressible: separate accounts per stage
 * (each entry has its own `account`), or a single account serving several
 * branches (every entry repeats the same `account`, and the branch alone
 * selects which Amplify branch is built).
 */
export interface AmplifyDeployStage {
  /** The git branch the Amplify apps build from, e.g. `main` or `production`. */
  readonly branch: string;

  /**
   * The logical stage this branch serves, e.g. `dev` or `prod`. Used as the
   * GitHub environment so protection rules apply per stage.
   */
  readonly stageName: string;

  /** The AWS account hosting this stage's Amplify apps. */
  readonly account: string;
}

/**
 * One Amplify Hosting application whose builds CI drives.
 *
 * Mirrors a `MonorepoAmplifyApp` entry in the generated `amplify.yml`; the
 * `appRoot` should match so a build is triggered by exactly the directory it is
 * built from.
 */
export interface AmplifyDeployApp {
  /**
   * Short key identifying the app. Used in the app-id SSM parameter path and,
   * by default, in the workflow name.
   *
   * Must match the key the CDK side registers the app under.
   */
  readonly key: string;

  /**
   * The package path that is the Amplify app root, e.g. `packages/frontend`.
   * `<appRoot>/**` becomes a push trigger path.
   */
  readonly appRoot: string;

  /**
   * Extra path globs that affect this app's build output.
   *
   * Set this for workspace packages the app consumes via `workspace:*` and that
   * the build spec pre-builds — a shared API package, say. Without them a change
   * to shared types would not rebuild the app and it would ship stale.
   *
   * @default []
   */
  readonly dependencyPaths?: string[];

  /**
   * Human-readable name used in step names and log lines.
   *
   * @default - the `key`
   */
  readonly label?: string;

  /**
   * The generated workflow name, which is also its `.yml` file name.
   *
   * @default - `<key>-deploy`
   */
  readonly workflowName?: string;
}

export interface GitHubAmplifyDeployOptions {
  /** The Amplify apps to generate deploy workflows for. At least one. */
  readonly apps: AmplifyDeployApp[];

  /** The branches that deploy, and the account each one deploys into. At least one. */
  readonly stages: AmplifyDeployStage[];

  /**
   * The GitHub OIDC deployment role every workflow assumes first, typically in
   * a management account. The per-stage build-trigger role is reached from it
   * by role chaining, so it must be allowed to `sts:AssumeRole` on that role —
   * an IAM grant that lives outside the generated code.
   */
  readonly deploymentRoleArn: string;

  /**
   * Name of the per-account IAM role CI chains into to start builds.
   *
   * The same name is expected in every stage account, so the workflow can build
   * the ARN from the account id alone. The CDK side must create a role with
   * exactly this name.
   *
   * @default - `<project name>-amplify-build-trigger`
   */
  readonly buildTriggerRoleName?: string;

  /**
   * Prefix of the SSM parameter path holding each app's Amplify app id. The
   * full path is `<prefix>/<app key>/app-id`.
   *
   * Reading the app id at run time means CI never hardcodes an id that changes
   * whenever an app is replaced.
   *
   * @default - `/<project name>/amplify`
   */
  readonly parameterPrefix?: string;

  /**
   * The AWS region the Amplify apps live in.
   *
   * @default 'eu-central-1'
   */
  readonly region?: string;

  /**
   * Paths that change what *every* Amplify build produces, added to each app's
   * own paths.
   *
   * @default - the Amplify build spec, the lockfile and the workspace file
   */
  readonly sharedBuildPaths?: string[];

  /**
   * The runner tags used to select the runner.
   *
   * @default ['ubuntu-latest']
   */
  readonly runnerTags?: string[];

  /**
   * Timeout for a deploy job, bounding a hung Amplify build.
   *
   * @default 45
   */
  readonly timeoutMinutes?: number;
}

/** Paths that invalidate every app's build output. */
const DEFAULT_SHARED_BUILD_PATHS = [
  'amplify.yml',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
];

/**
 * Adds one path-scoped deploy workflow per Amplify Hosting app.
 *
 * Amplify's own auto-build fires on every push to a tracked branch. In a
 * monorepo that means every frontend rebuilds whenever anything changes — the
 * marketing site rebuilding for a backend-only commit and vice versa, once per
 * tracked branch. Amplify bills build minutes, so most of those are waste.
 *
 * Amplify's native answer, `AMPLIFY_DIFF_DEPLOY`, diffs exactly one directory
 * (`AMPLIFY_MONOREPO_APP_ROOT`, overridable via `AMPLIFY_DIFF_DEPLOY_ROOT` —
 * still a single path). That is enough for a self-contained app but not for one
 * that also depends on a shared workspace package: a one-directory diff would
 * ship a stale frontend whenever the shared types changed. GitHub's `paths:`
 * filters accept multiple globs, so builds move to CI.
 *
 * Each generated workflow resolves the pushed branch to its stage and account,
 * chains OIDC -> deployment role -> build-trigger role, reads the app id from
 * SSM, starts a `RELEASE` job and polls until it reaches a terminal state — so
 * a failed Amplify build fails the workflow instead of passing silently.
 *
 * This component generates the CI half only. The infrastructure half belongs in
 * the project's own CDK app, which must:
 *
 *   1. set `autoBuild: false` on every branch these workflows build,
 *   2. publish each app's id to `<parameterPrefix>/<key>/app-id`, and
 *   3. create a role named `buildTriggerRoleName` in each stage account,
 *      trusted by `deploymentRoleArn` and granting `amplify:StartJob` +
 *      `amplify:GetJob` on the tracked branch ARNs only.
 *
 * Use `buildTriggerRoleName` and `appIdParameterName()` from the projenrc to
 * keep those names in step; a mismatch fails the workflow loudly at the
 * assume-role or parameter-read step rather than skipping a deploy.
 */
export class GitHubAmplifyDeploy extends Component {
  /** The generated deploy workflows, one per app. */
  public readonly workflows: github.GithubWorkflow[] = [];

  /** Name of the IAM role CI chains into, in every stage account. */
  public readonly buildTriggerRoleName: string;

  /** Prefix of the SSM parameter path holding each app's Amplify app id. */
  public readonly parameterPrefix: string;

  private readonly region: string;

  constructor(scope: GitHubProject, options: GitHubAmplifyDeployOptions) {
    super(scope);

    if (!scope.github) {
      throw new Error('GitHubAmplifyDeploy requires a project with GitHub enabled');
    }
    if (options.apps.length === 0) {
      throw new Error('GitHubAmplifyDeploy requires at least one app');
    }
    if (options.stages.length === 0) {
      throw new Error('GitHubAmplifyDeploy requires at least one stage');
    }

    const keys = options.apps.map((app) => app.key);
    const duplicateKey = keys.find((key, index) => keys.indexOf(key) !== index);
    if (duplicateKey) {
      throw new Error(`GitHubAmplifyDeploy app keys must be unique, got '${duplicateKey}' twice`);
    }

    const branches = options.stages.map((stage) => stage.branch);
    const duplicateBranch = branches.find((branch, index) => branches.indexOf(branch) !== index);
    if (duplicateBranch) {
      throw new Error(`GitHubAmplifyDeploy stage branches must be unique, got '${duplicateBranch}' twice`);
    }

    this.buildTriggerRoleName = options.buildTriggerRoleName ?? `${scope.name}-amplify-build-trigger`;
    this.parameterPrefix = options.parameterPrefix ?? `/${scope.name}/amplify`;
    this.region = options.region ?? 'eu-central-1';

    const sharedBuildPaths = options.sharedBuildPaths ?? DEFAULT_SHARED_BUILD_PATHS;
    const runnerTags = options.runnerTags ?? ['ubuntu-latest'];
    const timeoutMinutes = options.timeoutMinutes ?? 45;

    for (const app of options.apps) {
      const label = app.label ?? app.key;
      const workflowName = app.workflowName ?? `${app.key}-deploy`;

      const workflow = new github.GithubWorkflow(scope.github, workflowName);
      workflow.on({
        push: {
          branches: options.stages.map((stage) => stage.branch),
          paths: [
            `${app.appRoot}/**`,
            ...(app.dependencyPaths ?? []),
            ...sharedBuildPaths,
            // Changing the workflow itself should prove it still works.
            `.github/workflows/${workflowName}.yml`,
          ],
        },
        // Manual redeploy, e.g. after a build-only failure.
        workflowDispatch: {},
      });

      workflow.addJob('deploy', {
        name: `Build and deploy the ${label} on Amplify`,
        runsOn: runnerTags,
        permissions: {
          contents: github.workflows.JobPermission.READ,
          idToken: github.workflows.JobPermission.WRITE,
        },
        environment: this.environmentExpression(options.stages),
        concurrency: {
          'group': `${workflowName}-\${{ github.ref_name }}`,
          // Cancelling the workflow would not cancel the Amplify job it started,
          // so let runs queue instead of orphaning builds.
          'cancel-in-progress': false,
        },
        timeoutMinutes,
        steps: [
          {
            name: 'Resolve stage',
            id: 'stage',
            run: this.resolveStageScript(options.stages),
          },
          {
            name: 'AWS credentials — deployment role',
            id: 'aws_credentials_deployment_role',
            uses: 'aws-actions/configure-aws-credentials@v5',
            with: {
              'role-to-assume': options.deploymentRoleArn,
              'role-session-name': 'GitHubAction',
              'aws-region': this.region,
            },
          },
          {
            name: 'AWS credentials — Amplify build trigger',
            id: 'aws_credentials_amplify_build_trigger',
            uses: 'aws-actions/configure-aws-credentials@v5',
            with: {
              'role-to-assume': '${{ steps.stage.outputs.role_arn }}',
              'role-session-name': 'AmplifyBuildTrigger',
              'aws-region': this.region,
              // Chain from the deployment role rather than re-using the OIDC
              // token, so no identity provider is needed in the stage account.
              'role-chaining': true,
              // The action tags sessions by default, which turns the chained
              // call into AssumeRole + TagSession. The trust policy grants
              // AssumeRole only, so tagging fails the step; the session is
              // already tagged by the first assume anyway.
              'role-skip-session-tagging': true,
            },
          },
          {
            name: `Start ${label} build`,
            id: 'start',
            run: this.startBuildScript(app, label),
          },
          {
            name: 'Wait for build to finish',
            id: 'wait_for_build_to_finish',
            run: this.waitForBuildScript(label),
          },
        ],
      });

      this.workflows.push(workflow);
    }
  }

  /**
   * The SSM parameter path holding an app's Amplify app id. The CDK side must
   * publish the id under exactly this name.
   */
  public appIdParameterName(key: string): string {
    return `${this.parameterPrefix}/${key}/app-id`;
  }

  /**
   * The job-level `environment:` expression mapping branch to stage, so each
   * stage keeps whatever GitHub environment protection rules it has. The first
   * stage is the fallback; every later stage gets an explicit branch test.
   */
  private environmentExpression(stages: AmplifyDeployStage[]): string {
    const [fallback, ...rest] = stages;
    const tests = rest.map((s) => `github.ref_name == '${s.branch}' && '${s.stageName}' || `).join('');
    return `\${{ ${tests}'${fallback.stageName}' }}`;
  }

  /**
   * Bash mapping the pushed branch to its stage and build-trigger role ARN, so
   * account ids live only in the projenrc. A branch that is not a deploy branch
   * is an error rather than a silent no-op.
   */
  private resolveStageScript(stages: AmplifyDeployStage[]): string {
    const cases = stages.map((s) => `  ${s.branch}) stage='${s.stageName}'; account='${s.account}' ;;`);
    return [
      'set -euo pipefail',
      'case "$GITHUB_REF_NAME" in',
      ...cases,
      '  *)',
      '    echo "::error::$GITHUB_REF_NAME is not a deploy branch"',
      '    exit 1',
      '    ;;',
      'esac',
      `role="arn:aws:iam::$account:role/${this.buildTriggerRoleName}"`,
      'echo "stage=$stage" >> "$GITHUB_OUTPUT"',
      'echo "role_arn=$role" >> "$GITHUB_OUTPUT"',
      'echo "Deploying $GITHUB_REF_NAME to stage $stage ($account)" >> "$GITHUB_STEP_SUMMARY"',
    ].join('\n');
  }

  /** Reads the app id from SSM and starts a RELEASE build. */
  private startBuildScript(app: AmplifyDeployApp, label: string): string {
    return [
      'set -euo pipefail',
      `app_id="$(aws ssm get-parameter --name '${this.appIdParameterName(app.key)}' --query Parameter.Value --output text)"`,
      '# RELEASE builds the current tip of the branch. That is normally $GITHUB_SHA;',
      '# if two pushes race, the tip wins and the earlier run is redundant rather',
      '# than wrong. The job concurrency group keeps that rare.',
      'job_id="$(aws amplify start-job \\',
      '  --app-id "$app_id" \\',
      '  --branch-name "$GITHUB_REF_NAME" \\',
      '  --job-type RELEASE \\',
      '  --job-reason "GitHub Actions $GITHUB_WORKFLOW run $GITHUB_RUN_ID for $GITHUB_SHA" \\',
      '  --query jobSummary.jobId --output text)"',
      'echo "app_id=$app_id" >> "$GITHUB_OUTPUT"',
      'echo "job_id=$job_id" >> "$GITHUB_OUTPUT"',
      `echo "Started ${label} Amplify job \$job_id on app \$app_id" >> "\$GITHUB_STEP_SUMMARY"`,
    ].join('\n');
  }

  /** Polls the job until it reaches a terminal state, failing on a bad one. */
  private waitForBuildScript(label: string): string {
    return [
      'set -euo pipefail',
      'while true; do',
      '  status="$(aws amplify get-job \\',
      '    --app-id "${{ steps.start.outputs.app_id }}" \\',
      '    --branch-name "$GITHUB_REF_NAME" \\',
      '    --job-id "${{ steps.start.outputs.job_id }}" \\',
      '    --query job.summary.status --output text)"',
      '  case "$status" in',
      '    SUCCEED)',
      `      echo "${label} build succeeded" >> "\$GITHUB_STEP_SUMMARY"`,
      '      exit 0',
      '      ;;',
      '    FAILED|CANCELLED)',
      `      echo "::error::${label} Amplify job \${{ steps.start.outputs.job_id }} ended as \$status"`,
      '      exit 1',
      '      ;;',
      '  esac',
      '  echo "status: $status"',
      '  sleep 15',
      'done',
    ].join('\n');
  }
}
