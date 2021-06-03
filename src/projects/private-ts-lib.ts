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

  constructor(options: TaimosPrivateTypescriptLibraryOptions) {
    super({
      licensed: false,
      npmAccess: pj.NpmAccess.RESTRICTED,
      ...options,
    });
  }

}
