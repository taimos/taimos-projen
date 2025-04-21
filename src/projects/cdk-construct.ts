import { awscdk, javascript, github } from 'projen';

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
      copyrightPeriod: '2025',
      catalog: {
        announce: true,
        twitter: 'hoegertn',
      },
      license: 'Apache-2.0',
      stability: 'experimental',
      releaseToNpm: true,
      npmAccess: javascript.NpmAccess.PUBLIC,
      gitpod: false,
      autoApproveUpgrades: true,
      autoApproveOptions: { allowedUsernames: ['hoegertn', 'taimos-projen[bot]'], secret: 'GITHUB_TOKEN' },
      depsUpgradeOptions: { workflowOptions: { schedule: javascript.UpgradeDependenciesSchedule.WEEKLY } },
      githubOptions: {
        projenCredentials: github.GithubCredentials.fromApp(),
      },
      pullRequestTemplateContents: [`* **Please check if the PR fulfills these requirements**
- [ ] The commit message describes your change
- [ ] Tests for the changes have been added if possible (for bug fixes / features)
- [ ] Docs have been added / updated (for bug fixes / features)


* **What kind of change does this PR introduce?** (Bug fix, feature, docs update, ...)



* **What is the current behavior?** (You can also link to an open issue here)



* **What is the new behavior (if this is a feature change)?**



* **Does this PR introduce a breaking change?** (What changes might users need to make in their setup due to this PR?)



* **Other information**:`],
      ...options,
    });

  }

}
