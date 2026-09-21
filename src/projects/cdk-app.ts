import { awscdk, javascript } from 'projen';

export interface TaimosCdkAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {
  /**
   * Whether to enable private NPM registry authentication.
   *
   * @default false
   */
  readonly privateNpm?: boolean;
  /**
   * The environment variable name containing the NPM authentication token.
   *
   * @default 'NPM_TOKEN'
   */
  readonly privateNpmTokenEnvVar?: string;
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
      copyrightPeriod: new Date().getFullYear().toString(),
      requireApproval: awscdk.ApprovalLevel.NEVER,
      cdkVersionPinning: true,
      constructsVersion: '10.6.0',
      projenrcTs: true,
      // Taimos CDK apps live in a pnpm workspace monorepo; default to PNPM so a
      // sub-project does not have to restate it. A standalone app can override.
      packageManager: javascript.NodePackageManager.PNPM,
      ...options ?? {},
      githubOptions: {
        mergify: false,
        ...options.githubOptions ?? {},
      },
      tsconfig: {
        ...options.tsconfig ?? {},
        compilerOptions: {
          esModuleInterop: true,
          ...options.tsconfig?.compilerOptions ?? {},
        },
      },
    });
    this.addDevDeps('@taimos/projen');

    if (options.privateNpm ?? false) {
      const tokenEnvVar = options.privateNpmTokenEnvVar ?? 'NPM_TOKEN';
      this.npmrc.addConfig('//registry.npmjs.org/:_authToken', `\${${tokenEnvVar}}`);
    }
  }

}
