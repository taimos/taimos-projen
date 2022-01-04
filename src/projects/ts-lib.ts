import { DevEnvironmentDockerImage, javascript, typescript } from 'projen';

export interface TaimosTypescriptLibraryOptions extends typescript.TypeScriptProjectOptions {
  //
}

/**
 * TypeScript library
 *
 * @pjid taimos-ts-lib
 */
export class TaimosTypescriptLibrary extends typescript.TypeScriptProject {

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
      npmAccess: javascript.NpmAccess.PUBLIC,
      ...options,
      devDeps: [
        'ts-node',
        ...options.devDeps ?? [],
      ],
    });

    if (this.gitpod) {
      this.gitpod.addDockerImage(DevEnvironmentDockerImage.fromImage('taimos/gitpod'));
      this.gitpod.addCustomTask({
        init: 'yarn install --check-files --frozen-lockfile',
        command: 'npx projen build',
      });
    }
  }

}
