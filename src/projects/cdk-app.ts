import * as pj from 'projen';
import { CdkPipelineAspect, SopsAspect } from '../aspects';

export interface TaimosCdkAppOptions extends pj.AwsCdkTypeScriptAppOptions {
  /**
   * Enable storing secrets using Mozilla SOPS in a file sops.json
   *
   * @default false
   */
  readonly sops?: boolean;
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
      },
      requireApproval: pj.CdkApprovalLevel.NEVER,
      mergify: false,
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
      jestOptions: {
        typescriptConfig: {
          compilerOptions: {
            esModuleInterop: true,
          },
        },
      },
      ...options,
    });

    if (options.cdkPipelines) {
      new CdkPipelineAspect(this);
    }

    if (options.sops) {
      new SopsAspect(this);
    }
  }

}
