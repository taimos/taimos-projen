import * as pj from 'projen';

export interface TaimosCdkConstructLibraryOptions extends pj.AwsCdkConstructLibraryOptions {
  //
}

/**
 * TypeScript library
 *
 * @pjid taimos-awscdk-construct
 */
export class TaimosCdkConstructLibrary extends pj.AwsCdkConstructLibrary {

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
      npmAccess: pj.NpmAccess.PUBLIC,
      projenUpgradeSecret: 'GH_TOKEN',
      ...options,
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
