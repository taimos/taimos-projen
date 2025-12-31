import { javascript, typescript, github } from 'projen';

export interface TaimosTypescriptLibraryOptions extends typescript.TypeScriptProjectOptions {
  /**
   * Whether to enable private NPM registry authentication.
   *
   * @default false
   */
  readonly privateNpm?: boolean;
  /**
   * The environment variable name containing the NPM authentication token.
   *
   * @default 'NPM_TOKEN'
   */
  readonly privateNpmTokenEnvVar?: string;
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
      releaseToNpm: true,
      npmTrustedPublishing: true,
      npmAccess: javascript.NpmAccess.PUBLIC,
      gitpod: false,
      autoApproveUpgrades: true,
      autoApproveOptions: { allowedUsernames: ['hoegertn', 'taimos-projen[bot]'], secret: 'GITHUB_TOKEN' },
      depsUpgradeOptions: { workflowOptions: { schedule: javascript.UpgradeDependenciesSchedule.WEEKLY } },
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
      tsconfig: {
        ...options.tsconfig,
        compilerOptions: {
          esModuleInterop: true,
          ...options.tsconfig?.compilerOptions,
        },
      },
      githubOptions: {
        projenCredentials: github.GithubCredentials.fromApp(),
        mergify: false,
        ...options.githubOptions,
      },
      devDeps: [
        'ts-node',
        ...options.devDeps ?? [],
      ],
    });

    if (options.privateNpm ?? false) {
      const tokenEnvVar = options.privateNpmTokenEnvVar ?? 'NPM_TOKEN';
      this.npmrc.addConfig('//registry.npmjs.org/:_authToken', `\${${tokenEnvVar}}`);
    }

  }

}
