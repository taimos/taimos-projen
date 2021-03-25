import * as pj from 'projen';

export interface TaimosTypescriptLibraryOptions extends pj.TypeScriptProjectOptions {
  //
}

/**
 * TypeScript library
 *
 * @pjid taimos-ts-lib
 */
export class TaimosTypescriptLibrary extends pj.TypeScriptProject {

  constructor(options: TaimosTypescriptLibraryOptions) {
    super({
      authorName: 'Taimos GmbH',
      authorEmail: 'info@taimos.de',
      authorOrganization: true,
      authorUrl: 'https://taimos.de',
      copyrightOwner: 'Taimos GmbH',
      copyrightPeriod: '2021',
      releaseBranches: [
        'main',
      ],
      license: 'Apache-2.0',
      licensed: true,
      stability: 'experimental',
      docgen: true,
      typescriptVersion: '^4.2.0',
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
      jestOptions: {
        typescriptConfig: {
          compilerOptions: {
            esModuleInterop: true,
          },
        },
      },
      codeCov: true,
      releaseToNpm: true,
      npmDistTag: 'latest --access public', // Hack to release scoped packages
      ...options,
    });
  }

}
