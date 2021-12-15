import { javascript } from 'projen';
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

  protected readonly npmConfig: javascript.NpmConfig;

  constructor(options: TaimosPrivateTypescriptLibraryOptions) {
    super({
      licensed: false,
      npmAccess: javascript.NpmAccess.RESTRICTED,
      ...options,
    });

    this.npmConfig = new javascript.NpmConfig(this);
    this.npmConfig.addConfig('//registry.npmjs.org/:_authToken', '${NPM_TOKEN}');
  }

}
