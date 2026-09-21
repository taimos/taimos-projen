import { IniFile, javascript } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import { TaimosCdkApp, TaimosCdkAppOptions } from './cdk-app';

export interface SonarcloudOptions {
  /**
   * The paths to exclude from SonarCloud analysis.
   */
  readonly exclude?: string[];
  /**
   * The paths to exclude from SonarCloud duplication analysis.
   */
  readonly excludeDuplications?: string[];
}

export interface ProductionTaimosCdkAppOptions extends TaimosCdkAppOptions {
  /**
   * Whether to enable Lumigo.
   *
   * @default false
   */
  readonly lumigo?: boolean;

  /**
   * Whether to enable Dash0 as the standard observability integration.
   *
   * Dash0 is the Taimos standard (EU-hosted): CloudWatch metrics stream to Dash0
   * via a Kinesis Firehose HTTP endpoint, and Lambda auto-instrumentation (traces
   * + logs) via the Dash0 extension layer. The API key is SOPS-encrypted per
   * stage (`config.dash0.<stage>.json`), so this ensures `cdk-sops-secrets` is
   * present.
   *
   * The Dash0 CDK construct itself is app-level `src/` code (Firehose stream +
   * Lambda instrumentation Aspect) — see `nornkeep/packages/backend/src/dash0`
   * for the reference. This option wires the project-level prerequisites and
   * marks the app as using the standard setup.
   *
   * @default true
   */
  readonly dash0?: boolean;

  /**
   * Whether to enable SOPS.
   *
   * @default true
   */
  readonly sops?: boolean;

  /**
   * Whether to enable SonarCloud.
   *
   * @default true
   */
  readonly sonarcloud?: boolean;
  /**
   * The SonarCloud options.
   */
  readonly sonarcloudOptions?: SonarcloudOptions;
}

/**
 * Production AWS CDK app in TypeScript
 *
 * @pjid taimos-cdk-app-production
 */
export class ProductionTaimosCdkApp extends TaimosCdkApp {

  /**
   * The SonarCloud properties file.
   */
  public readonly sonarcloud?: IniFile;

  constructor(options: ProductionTaimosCdkAppOptions) {
    super({
      licensed: false,
      projenCredentials: GithubCredentials.fromApp(),
      ...options,
      depsUpgradeOptions: {
        ...options.depsUpgradeOptions ?? {},
        workflowOptions: {
          projenCredentials: GithubCredentials.fromApp(),
          schedule: javascript.UpgradeDependenciesSchedule.WEEKLY,
          assignees: ['hoegertn'],
          ...options.depsUpgradeOptions?.workflowOptions ?? {},
        },
      },
      githubOptions: {
        mergeQueue: true,
        ...options.githubOptions ?? {},
        mergeQueueOptions: {
          autoQueue: true,
          ...options.githubOptions?.mergeQueueOptions ?? {},
        },
      },
      buildWorkflowOptions: {
        ...options.buildWorkflowOptions ?? {},
        workflowTriggers: {
          pullRequest: {},
          workflowDispatch: {},
          mergeGroup: {},
          ...options.buildWorkflowOptions?.workflowTriggers ?? {},
        },
      },
      tsconfig: {
        ...options.tsconfig ?? {},
        compilerOptions: {
          skipLibCheck: true,
          ...options.tsconfig?.compilerOptions ?? {},
        },
      },
      devDeps: [
        '@taimos/projen',
        'projen-pipelines',
        ...options.devDeps ?? [],
      ],
      deps: [
        ...options.deps ?? [],
      ],
    });

    if (options.lumigo ?? false) {
      this.addDeps('@lumigo/cdk-constructs-v2');
    }

    // Dash0 is the standard observability integration; SOPS carries its
    // per-stage API key. Either one requires cdk-sops-secrets (projen dedupes).
    // The Dash0 CDK construct is app-level src/ code (see
    // nornkeep/packages/backend/src/dash0).
    if ((options.dash0 ?? true) || (options.sops ?? true)) {
      this.addDeps('cdk-sops-secrets');
    }

    if (options.sonarcloud ?? false) {
      this.sonarcloud = new IniFile(this, '.sonarcloud.properties', {
        obj: {
          'sonar.sources': this.srcdir ?? 'src',
          'sonar.tests': this.testdir ?? 'test',
          'sonar.exclusions': options.sonarcloudOptions?.exclude?.join(',') ?? 'src/generated/**',
          'sonar.cpd.exclusions': options.sonarcloudOptions?.excludeDuplications?.join(',') ?? '**/*',
        },
      });
    }

  }
}

export const FEATURE_FLAGS_2025_04 = {
  '@aws-cdk/core:checkSecretUsage': true,
  '@aws-cdk/core:validateSnapshotRemovalPolicy': true,
  '@aws-cdk/core:enablePartitionLiterals': true,
  '@aws-cdk/aws-lambda:recognizeLayerVersion': true,
  '@aws-cdk/aws-ecs:arnFormatIncludesClusterName': true,
  '@aws-cdk/aws-iam:minimizePolicies': true,
  '@aws-cdk/aws-s3:createDefaultLoggingPolicy': true,
  '@aws-cdk/aws-apigateway:disableCloudWatchRole': true,
  '@aws-cdk/aws-events:eventsTargetQueueSameAccount': true,
  '@aws-cdk/aws-ecs:disableExplicitDeploymentControllerForCircuitBreaker': true,
  '@aws-cdk/aws-iam:importedRoleStackSafeDefaultPolicyName': true,
  '@aws-cdk/aws-s3:serverAccessLogsUseBucketPolicy': true,
  '@aws-cdk/customresources:installLatestAwsSdkDefault': false,
  '@aws-cdk/aws-apigateway:authorizerChangeDeploymentLogicalId': true,
  '@aws-cdk/aws-secretsmanager:useAttachedSecretResourcePolicyForSecretTargetAttachments': true,
  '@aws-cdk/aws-apigateway:requestValidatorUniqueId': true,
  '@aws-cdk/aws-kms:aliasNameRef': true,
  '@aws-cdk/core:includePrefixInUniqueNameGeneration': true,
  '@aws-cdk/aws-lambda-nodejs:useLatestRuntimeVersion': true,
  '@aws-cdk/aws-appsync:useArnForSourceApiAssociationIdentifier': true,
  '@aws-cdk/aws-cloudwatch-actions:changeLambdaPermissionLogicalIdForLambdaAction': true,
  '@aws-cdk/aws-kms:reduceCrossAccountRegionPolicyScope': true,
  '@aws-cdk/aws-ecs:removeDefaultDeploymentAlarm': true,
  '@aws-cdk/custom-resources:logApiResponseDataPropertyTrueDefault': false,
  '@aws-cdk/aws-ecs:enableImdsBlockingDeprecatedFeature': false,
  '@aws-cdk/aws-ecs:disableEcsImdsBlocking': true,
  '@aws-cdk/aws-ecs:reduceEc2FargateCloudWatchPermissions': true,
  '@aws-cdk/aws-dynamodb:resourcePolicyPerReplica': true,
  '@aws-cdk/aws-appsync:appSyncGraphQLAPIScopeLambdaPermission': true,
  '@aws-cdk/core:cfnIncludeRejectComplexResourceUpdateCreatePolicyIntrinsics': true,
  '@aws-cdk/aws-lambda-nodejs:sdkV3ExcludeSmithyPackages': true,
  '@aws-cdk/aws-stepfunctions-tasks:fixRunEcsTaskPolicy': true,
  '@aws-cdk/aws-ec2:bastionHostUseAmazonLinux2023ByDefault': true,
  '@aws-cdk/aws-route53-targets:userPoolDomainNameMethodWithoutCustomResource': true,
};
