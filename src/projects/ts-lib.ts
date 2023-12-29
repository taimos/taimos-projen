import { DevEnvironmentDockerImage, javascript, typescript, github } from 'projen';

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
      copyrightPeriod: '2024',
      license: 'Apache-2.0',
      licensed: true,
      stability: 'experimental',
      docgen: true,
      tsconfig: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
      releaseToNpm: true,
      npmAccess: javascript.NpmAccess.PUBLIC,
      gitpod: true,
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
