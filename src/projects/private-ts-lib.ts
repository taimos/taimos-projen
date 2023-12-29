import { javascript } from 'projen';
import { CodeArtifactAuthProvider } from 'projen/lib/javascript';
import { TaimosTypescriptLibrary, TaimosTypescriptLibraryOptions } from './ts-lib';

export interface TaimosPrivateTypescriptLibraryOptions extends TaimosTypescriptLibraryOptions {
  //
}

/**
 * Private TypeScript library
 *
 * @pjid taimos-ts-lib-private
 */
export class TaimosPrivateTypescriptLibrary extends TaimosTypescriptLibrary {

  constructor(options: TaimosPrivateTypescriptLibraryOptions) {
    super({
      licensed: false,
      npmAccess: javascript.NpmAccess.RESTRICTED,
      codeArtifactOptions: {
        authProvider: CodeArtifactAuthProvider.GITHUB_OIDC,
      },
      scopedPackagesOptions: [{
        scope: '@taimos',
        registryUrl: 'https://taimos-292004443359.d.codeartifact.eu-central-1.amazonaws.com/npm/main/',
      }],
      ...options,
    });
  }

}
