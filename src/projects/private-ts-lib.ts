import * as pj from 'projen';
import { TaimosTypescriptLibrary } from './ts-lib';

export interface TaimosTypescriptLibraryOptions extends pj.TypeScriptProjectOptions {
  //
}

/**
 * Private TypeScript library
 *
 * @pjid taimos-ts-lib-private
 */
export class TaimosPrivateTypescriptLibrary extends TaimosTypescriptLibrary {

  constructor(options: TaimosTypescriptLibraryOptions) {
    super({
      licensed: false,
      npmAccess: pj.NpmAccess.RESTRICTED,
      ...options,
    });
  }

}
