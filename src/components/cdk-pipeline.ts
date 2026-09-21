import { awscdk } from 'projen';
import { GithubCDKPipeline } from 'projen-pipelines/lib/awscdk/github';
import { VersioningOutputs, VersioningStrategy } from 'projen-pipelines/lib/versioning';

/**
 * One deploy stage for a Taimos CDK pipeline.
 */
export interface TaimosPipelineStage {
  /** The projen-pipelines stage name, e.g. `dev` or `prod`. */
  readonly name: string;
  /** The target AWS account id. */
  readonly account: string;
  /** The target AWS region. */
  readonly region: string;
  /** Whether this stage supports `cdk watch`. */
  readonly watchable?: boolean;
}

/**
 * Per-role deploy ARN overrides for a Taimos CDK pipeline.
 */
export interface TaimosPipelineRoleArns {
  /** ARN assumed for the default deploy role. */
  readonly default: string;
  /** ARN assumed for asset publishing. */
  readonly assetPublishing: string;
  /** ARN assumed for synth. */
  readonly synth: string;
}

/**
 * A personal sandbox stage's target environment.
 */
export interface TaimosPipelinePersonalStage {
  /** The sandbox AWS account id. */
  readonly account: string;
  /** The sandbox AWS region. */
  readonly region: string;
}

/**
 * Options for {@link taimosCdkPipeline}.
 */
export interface TaimosCdkPipelineOptions {
  /**
   * The pipeline name (namespaces the generated workflow in a monorepo), e.g.
   * `backend` or `infra`.
   */
  readonly pipelineName: string;

  /**
   * The GitHub OIDC deploy-role ARN. Applied to `default`, `assetPublishing` and
   * `synth` unless overridden via {@link iamRoleArns}.
   */
  readonly roleArn: string;

  /**
   * Per-role ARN overrides. When omitted, {@link roleArn} is used for all three.
   *
   * @default - roleArn for default, assetPublishing and synth
   */
  readonly iamRoleArns?: TaimosPipelineRoleArns;

  /**
   * The deploy stages, in order.
   */
  readonly stages: TaimosPipelineStage[];

  /**
   * A personal sandbox stage for local iteration.
   *
   * @default - none
   */
  readonly personalStage?: TaimosPipelinePersonalStage;

  /**
   * CI trigger path filters scoping the pipeline to the package that owns it,
   * e.g. `['packages/backend/**', 'packages/api/**']`.
   */
  readonly paths?: string[];

  /**
   * Pin live stack names to a historical prefix (load-bearing when migrating
   * pre-existing stacks). Defaults to the projen app name.
   *
   * @default - the projen app name
   */
  readonly stackPrefix?: string;

  /**
   * A command run at the repo root before synth (e.g. building the workspace API
   * dependency).
   *
   * @default - none
   */
  readonly preBuildCommand?: string;
}

/**
 * Create a `GithubCDKPipeline` with the standard Taimos wiring, removing the
 * boilerplate every backend/infra sub-project repeats: the `iamRoleArns` triple
 * fanned out from one role ARN, `useGithubEnvironments`, and the commit-count /
 * CloudFormation-only versioning block.
 *
 * Returns the pipeline so the caller can still customise it.
 */
export function taimosCdkPipeline(app: awscdk.AwsCdkTypeScriptApp, options: TaimosCdkPipelineOptions): GithubCDKPipeline {
  const roles = options.iamRoleArns ?? {
    default: options.roleArn,
    assetPublishing: options.roleArn,
    synth: options.roleArn,
  };

  return new GithubCDKPipeline(app, {
    pipelineName: options.pipelineName,
    ...(options.paths ? { paths: options.paths } : {}),
    ...(options.stackPrefix ? { stackPrefix: options.stackPrefix } : {}),
    ...(options.preBuildCommand ? { preBuildCommand: options.preBuildCommand } : {}),
    iamRoleArns: roles,
    useGithubEnvironments: true,
    versioning: {
      enabled: true,
      strategy: VersioningStrategy.commitCount(),
      outputs: VersioningOutputs.cloudFormationOnly(),
    },
    ...(options.personalStage ? { personalStage: { env: options.personalStage } } : {}),
    stages: options.stages.map((s) => ({
      name: s.name,
      env: { account: s.account, region: s.region },
      ...(s.watchable ? { watchable: s.watchable } : {}),
    })),
  });
}
