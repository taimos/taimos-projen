import { awscdk, DevEnvironmentDockerImage } from 'projen';
import { CdkPipelineAspect, SopsAspect, SopsAspectOptions } from '../aspects';

export interface TaimosCdkAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {
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
export class TaimosCdkApp extends awscdk.AwsCdkTypeScriptApp {

  constructor(options: TaimosCdkAppOptions) {
    super({
      authorEmail: 'info@taimos.de',
      authorName: 'Thorsten Hoeger',
      authorOrganization: true,
      authorUrl: 'https://www.taimos.de',
      cdkVersionPinning: true,
      copyrightOwner: 'Taimos GmbH',
      copyrightPeriod: '2021',
      requireApproval: awscdk.ApprovalLevel.NEVER,
      mergify: false,
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
      typescriptVersion: '^4.4.0',
      ...options,
    });

    if (options.cdkPipelines) {
      new CdkPipelineAspect(this);
    }

    if (options.sops) {
      const sops = new SopsAspect(this, options.sops);
      if (options.cdkVersion.startsWith('1.')) {
        sops.generatedCodeFile.line("import * as cdk from '@aws-cdk/core';");
      } else {
        sops.generatedCodeFile.line("import * as cdk from 'aws-cdk-lib';");
      }
      sops.generatedCodeFile.open('export function resolveSecretValue(secret: SecretIndex, jsonField: string): cdk.SecretValue {');
      sops.generatedCodeFile.line('return cdk.SecretValue.secretsManager(secretNames[secret], { jsonField, versionId: secretVersions[secret] });');
      sops.generatedCodeFile.close('}');
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
