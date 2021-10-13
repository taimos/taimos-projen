import * as pj from 'projen';
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

  protected readonly npmConfig: pj.javascript.NpmConfig;

  constructor(options: TaimosPrivateTypescriptLibraryOptions) {
    super({
      licensed: false,
      npmAccess: pj.NpmAccess.RESTRICTED,
      ...options,
    });

    this.npmConfig = new pj.javascript.NpmConfig(this);
    this.npmConfig.addConfig('//registry.npmjs.org/:_authToken', '${NPM_TOKEN}');
  }

}
