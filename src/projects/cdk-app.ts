import * as pj from 'projen';
import { CdkPipelineAspect, SopsAspect, SopsAspectOptions } from '../aspects';

export interface TaimosCdkAppOptions extends pj.AwsCdkTypeScriptAppOptions {
  /**
   * Enable storing secrets using Mozilla SOPS
   *
   * @default - no SOPS config
   */
  readonly sops?: SopsAspectOptions;
  /**
   * Enable CDK pipelines
   *
   * @default false
   */
  readonly cdkPipelines?: boolean;
}

/**
 * AWS CDK app in TypeScript
 *
 * @pjid taimos-cdk-app
 */
export class TaimosCdkApp extends pj.AwsCdkTypeScriptApp {

  constructor(options: TaimosCdkAppOptions) {
    super({
      authorEmail: 'info@taimos.de',
      authorName: 'Thorsten Hoeger',
      authorOrganization: true,
      authorUrl: 'https://www.taimos.de',
      cdkVersionPinning: true,
      copyrightOwner: 'Taimos GmbH',
      copyrightPeriod: '2021',
      context: {
        'aws-cdk:enableDiffNoFail': 'true',
        '@aws-cdk/core:enableStackNameDuplicates': 'true',
        '@aws-cdk/core:newStyleStackSynthesis': 'true',
        '@aws-cdk/core:stackRelativeExports': 'true',
        '@aws-cdk/aws-ecr-assets:dockerIgnoreSupport': 'true',
        '@aws-cdk/aws-secretsmanager:parseOwnedSecretName': 'true',
        '@aws-cdk/aws-kms:defaultKeyPolicies': 'true',
        '@aws-cdk/aws-apigateway:usagePlanKeyOrderInsensitiveId': 'true',
        '@aws-cdk/aws-s3:grantWriteWithoutAcl': 'true',
        '@aws-cdk/aws-ecs-patterns:removeDefaultDesiredCount': 'true',
        '@aws-cdk/aws-rds:lowercaseDbIdentifier': 'true',
        '@aws-cdk/aws-efs:defaultEncryptionAtRest': 'true',
      },
      requireApproval: pj.CdkApprovalLevel.NEVER,
      mergify: false,
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
      jestOptions: {
        jestConfig: {
          compilerOptions: {
            esModuleInterop: true,
          },
        },
      },
      typescriptVersion: '^4.2.0',
      projenUpgradeSecret: 'GH_TOKEN',
      ...options,
    });

    if (options.cdkPipelines) {
      new CdkPipelineAspect(this);
    }

    if (options.sops) {
      const sops = new SopsAspect(this, options.sops);
      sops.generatedCodeFile.line("import * as cdk from '@aws-cdk/core';");
      sops.generatedCodeFile.open('export function resolveSecretValue(secret: SecretIndex, jsonField: string): cdk.SecretValue {');
      sops.generatedCodeFile.line('return cdk.SecretValue.secretsManager(secretNames[secret], { jsonField, versionId: secretVersions[secret] });');
      sops.generatedCodeFile.close('}');
    }
  }

}
