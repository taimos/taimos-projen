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
      stability: 'experimental',
      docgen: true,
      typescriptVersion: '^4.4.0',
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
      releaseToNpm: true,
      npmAccess: pj.NpmAccess.PUBLIC,
      projenUpgradeSecret: 'GH_TOKEN',
      ...options,
      devDeps: [
        'ts-node',
        ...options.devDeps ?? [],
      ],
      gitpod: false,
    });

    if (!!options.gitpod) {
      const gp = new pj.Gitpod(this, {
        dockerImage: pj.DevEnvironmentDockerImage.fromImage('taimos/gitpod'),
      });
      gp.addCustomTask({
        init: 'yarn install --check-files --frozen-lockfile',
        command: 'npx projen build',
      });
    }
  }

}
