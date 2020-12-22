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
      copyrightPeriod: '2020',
      context: {
        '@aws-cdk/core:enableStackNameDuplicates': 'true',
        '@aws-cdk/core:newStyleStackSynthesis': 'true',
        'aws-cdk:enableDiffNoFail': 'true',
        '@aws-cdk/core:stackRelativeExports': 'true',
      },
      requireApproval: pj.CdkApprovalLevel.NEVER,
      mergify: false,
      defaultReleaseBranch: 'main',
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
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
