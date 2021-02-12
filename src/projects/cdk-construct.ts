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
      gitpod: true,
      releaseBranches: [
        'main',
      ],
      license: 'Apache-2.0',
      stability: 'experimental',
      docgen: true,
      codeCov: true,
      releaseToNpm: true,
      npmDistTag: 'latest --access public', // Hack to release scoped packages
      ...options,
    });
  }

}
