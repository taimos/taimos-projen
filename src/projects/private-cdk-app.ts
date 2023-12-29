import { javascript } from 'projen';
import { TaimosCdkApp, TaimosCdkAppOptions } from './cdk-app';

export interface PrivateTaimosCdkAppOptions extends TaimosCdkAppOptions {
  //
}

/**
 * Private AWS CDK app in TypeScript
 *
 * @pjid taimos-cdk-app-private
 */
export class PrivateTaimosCdkApp extends TaimosCdkApp {

  constructor(options: PrivateTaimosCdkAppOptions) {
    super({
      licensed: false,
      npmAccess: javascript.NpmAccess.RESTRICTED,
      codeArtifact: true,
      ...options,
    });

    this.addDevDeps('@taimos/projen');
    this.addDeps('@taimos/constructs');
  }
}