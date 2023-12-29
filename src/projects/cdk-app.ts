import { awscdk, DevEnvironmentDockerImage } from 'projen';

export interface TaimosCdkAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {
  /**
   * Whether to enable integration with AWS CodeArtifact for package management.
   *
   * @default false
   */
  readonly codeArtifact?: boolean;
}

/**
 * AWS CDK app in TypeScript
 *
 * @pjid taimos-cdk-app
 */
export class TaimosCdkApp extends awscdk.AwsCdkTypeScriptApp {

  constructor(options: TaimosCdkAppOptions) {
    super({
      authorEmail: 'info@taimos.de',
      authorName: 'Thorsten Hoeger',
      authorOrganization: true,
      authorUrl: 'https://www.taimos.de',
      copyrightOwner: 'Taimos GmbH',
      copyrightPeriod: '2024',
      requireApproval: awscdk.ApprovalLevel.NEVER,
      mergify: false,
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
      ...options,
    });

    if (options.codeArtifactOptions) {
      this.npmrc.addRegistry('https://taimos-292004443359.d.codeartifact.eu-central-1.amazonaws.com/npm/main/');
      this.npmrc.addConfig('//taimos-292004443359.d.codeartifact.eu-central-1.amazonaws.com/npm/main/:_authToken', '${CODEARTIFACT_AUTH_TOKEN}');
      this.npmrc.addConfig('//taimos-292004443359.d.codeartifact.eu-central-1.amazonaws.com/npm/main/:always-auth', 'true');
    }

    if (this.gitpod) {
      this.gitpod.addDockerImage(DevEnvironmentDockerImage.fromImage('taimos/gitpod'));
      this.gitpod.addCustomTask({
        init: 'yarn install --check-files --frozen-lockfile',
        command: 'npx projen build',
      });
    }
  }

}
