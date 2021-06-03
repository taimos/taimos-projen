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
      license: 'Apache-2.0',
      licensed: true,
      gitpod: true,
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
      releaseToNpm: true,
      npmAccess: pj.NpmAccess.PUBLIC,
      projectType: pj.ProjectType.LIB,
      ...options,
    });
  }

}
