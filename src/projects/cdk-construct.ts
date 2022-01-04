import { awscdk, DevEnvironmentDockerImage, javascript } from 'projen';

export interface TaimosCdkConstructLibraryOptions extends awscdk.AwsCdkConstructLibraryOptions {
  //
}

/**
 * TypeScript library
 *
 * @pjid taimos-awscdk-construct
 */
export class TaimosCdkConstructLibrary extends awscdk.AwsCdkConstructLibrary {

  constructor(options: TaimosCdkConstructLibraryOptions) {
    super({
      authorOrganization: true,
      copyrightOwner: 'Taimos GmbH',
      copyrightPeriod: '2021',
      catalog: {
        announce: true,
        twitter: 'hoegertn',
      },
      license: 'Apache-2.0',
      stability: 'experimental',
      releaseToNpm: true,
      npmAccess: javascript.NpmAccess.PUBLIC,
      ...options,
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
