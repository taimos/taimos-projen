import { awscdk, DevEnvironmentDockerImage, Gitpod, javascript } from 'projen';

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
      projenUpgradeSecret: 'GH_TOKEN',
      ...options,
      gitpod: false,
    });

    if (!!options.gitpod) {
      const gp = new Gitpod(this, {
        dockerImage: DevEnvironmentDockerImage.fromImage('taimos/gitpod'),
      });
      gp.addCustomTask({
        init: 'yarn install --check-files --frozen-lockfile',
        command: 'npx projen build',
      });
    }
  }

}
