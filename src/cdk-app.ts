import * as pj from 'projen';

export interface TaimosCdkAppOptions extends pj.AwsCdkTypeScriptAppOptions {
  //
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
      sampleCode: false,
    });
  }

}
