# API Reference

**Classes**

Name|Description
----|-----------
[PrivateTaimosCdkApp](#taimos-projen-privatetaimoscdkapp)|Private AWS CDK app in TypeScript.
[TaimosCdkApp](#taimos-projen-taimoscdkapp)|AWS CDK app in TypeScript.
[TaimosCdkConstructLibrary](#taimos-projen-taimoscdkconstructlibrary)|TypeScript library.
[TaimosPrivateTypescriptLibrary](#taimos-projen-taimosprivatetypescriptlibrary)|Private TypeScript library.
[TaimosTypescriptLibrary](#taimos-projen-taimostypescriptlibrary)|TypeScript library.


**Structs**

Name|Description
----|-----------
[PrivateTaimosCdkAppOptions](#taimos-projen-privatetaimoscdkappoptions)|*No description*
[TaimosCdkAppOptions](#taimos-projen-taimoscdkappoptions)|*No description*
[TaimosCdkConstructLibraryOptions](#taimos-projen-taimoscdkconstructlibraryoptions)|*No description*
[TaimosPrivateTypescriptLibraryOptions](#taimos-projen-taimosprivatetypescriptlibraryoptions)|*No description*
[TaimosTypescriptLibraryOptions](#taimos-projen-taimostypescriptlibraryoptions)|*No description*



## class PrivateTaimosCdkApp  <a id="taimos-projen-privatetaimoscdkapp"></a>

Private AWS CDK app in TypeScript.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [TaimosCdkApp](#taimos-projen-taimoscdkapp)

### Initializer




```ts
new PrivateTaimosCdkApp(options: PrivateTaimosCdkAppOptions)
```

* **options** (<code>[PrivateTaimosCdkAppOptions](#taimos-projen-privatetaimoscdkappoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **commitGenerated** (<code>boolean</code>)  Whether to commit the managed files by default. __*Default*__: true
  * **gitIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .gitignore file. __*Optional*__
  * **gitOptions** (<code>[GitOptions](#projen-gitoptions)</code>)  Configuration options for git. __*Optional*__
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **projenrcJson** (<code>boolean</code>)  Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. __*Default*__: false
  * **projenrcJsonOptions** (<code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code>)  Options for .projenrc.json. __*Default*__: default options
  * **renovatebot** (<code>boolean</code>)  Use renovatebot to handle dependency upgrades. __*Default*__: false
  * **renovatebotOptions** (<code>[RenovatebotOptions](#projen-renovatebotoptions)</code>)  Options for renovatebot. __*Default*__: default options
  * **autoApproveOptions** (<code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code>)  Enable and configure the 'auto approve' workflow. __*Default*__: auto approve is disabled
  * **autoMerge** (<code>boolean</code>)  Enable automatic merging on GitHub. __*Default*__: true
  * **autoMergeOptions** (<code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code>)  Configure options for automatic merging on GitHub. __*Default*__: see defaults in `AutoMergeOptions`
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true, but false for subprojects
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **github** (<code>boolean</code>)  Enable GitHub integration. __*Default*__: true
  * **githubOptions** (<code>[github.GitHubOptions](#projen-github-githuboptions)</code>)  Options for GitHub integration. __*Default*__: see GitHubOptions
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **mergify** (<code>boolean</code>)  Whether mergify should be enabled on this repository or not. __*Default*__: true
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **projenCredentials** (<code>[github.GithubCredentials](#projen-github-githubcredentials)</code>)  Choose a method of providing GitHub API access for projen workflows. __*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
  * **projenTokenSecret** (<code>string</code>)  The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. __*Default*__: "PROJEN_GITHUB_TOKEN"
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **stale** (<code>boolean</code>)  Auto-close of stale issues and pull request. __*Default*__: false
  * **staleOptions** (<code>[github.StaleOptions](#projen-github-staleoptions)</code>)  Auto-close stale issues and pull requests. __*Default*__: see defaults in `StaleOptions`
  * **vscode** (<code>boolean</code>)  Enable VSCode integration. __*Default*__: true
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Is the author an organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bugsEmail** (<code>string</code>)  The email address to which issues should be reported. __*Optional*__
  * **bugsUrl** (<code>string</code>)  The url to your project's issue tracker. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
  * **codeArtifactOptions** (<code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code>)  Options for npm packages using AWS CodeArtifact. __*Default*__: undefined
  * **deps** (<code>Array<string></code>)  Runtime dependencies of this module. __*Default*__: []
  * **description** (<code>string</code>)  The description is just a string that helps people understand the purpose of the package. __*Optional*__
  * **devDeps** (<code>Array<string></code>)  Build dependencies for this module. __*Default*__: []
  * **entrypoint** (<code>string</code>)  Module entrypoint (`main` in `package.json`). __*Default*__: "lib/index.js"
  * **homepage** (<code>string</code>)  Package's Homepage / Website. __*Optional*__
  * **keywords** (<code>Array<string></code>)  Keywords to include in `package.json`. __*Optional*__
  * **license** (<code>string</code>)  License's SPDX identifier. __*Default*__: "Apache-2.0"
  * **licensed** (<code>boolean</code>)  Indicates if a license should be added. __*Default*__: true
  * **maxNodeVersion** (<code>string</code>)  Minimum node.js version to require via `engines` (inclusive). __*Default*__: no max
  * **minNodeVersion** (<code>string</code>)  Minimum Node.js version to require via package.json `engines` (inclusive). __*Default*__: no "engines" specified
  * **npmAccess** (<code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmProvenance** (<code>boolean</code>)  Should provenance statements be generated when the package is published. __*Default*__: true for public packages, false otherwise
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN_CLASSIC
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **pnpmVersion** (<code>string</code>)  The version of PNPM to use if using PNPM as a package manager. __*Default*__: "7"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scopedPackagesOptions** (<code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code>)  Options for privately hosted scoped packages. __*Default*__: fetch all scoped packages from the public npm registry
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **yarnBerryOptions** (<code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code>)  Options for Yarn Berry. __*Default*__: Yarn Berry v4 with all default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `publib` which is used to publish modules to npm. __*Default*__: "latest"
  * **majorVersion** (<code>number</code>)  Major version to release from the default branch. __*Default*__: Major version is not enforced.
  * **minMajorVersion** (<code>number</code>)  Minimal Major version to release. __*Default*__: No minimum version is being enforced
  * **npmDistTag** (<code>string</code>)  The npmDistTag to use when publishing from the default branch. __*Default*__: "latest"
  * **postBuildSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Steps to execute after build as part of the release workflow. __*Default*__: []
  * **prerelease** (<code>string</code>)  Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). __*Default*__: normal semantic versions
  * **publishDryRun** (<code>boolean</code>)  Instead of actually publishing to package managers, just print the publishing command. __*Default*__: false
  * **publishTasks** (<code>boolean</code>)  Define publishing tasks that can be executed manually as well as workflows. __*Default*__: false
  * **releasableCommits** (<code>[ReleasableCommits](#projen-releasablecommits)</code>)  Find commits that should be considered releasable Used to decide if a release is required. __*Default*__: ReleasableCommits.everyCommit()
  * **releaseBranches** (<code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code>)  Defines additional release branches. __*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseFailureIssue** (<code>boolean</code>)  Create a github issue on every failed publishing task. __*Default*__: false
  * **releaseFailureIssueLabel** (<code>string</code>)  The label to apply to issues indicating publish failures. __*Default*__: "failed-release"
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseTagPrefix** (<code>string</code>)  Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. __*Default*__: "v"
  * **releaseTrigger** (<code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code>)  The release trigger to use. __*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
  * **releaseWorkflowName** (<code>string</code>)  The name of the default release workflow. __*Default*__: "release"
  * **releaseWorkflowSetupSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **versionrcOptions** (<code>Map<string, any></code>)  Custom configuration used when creating changelog with standard-version package. __*Default*__: standard configuration applicable for GitHub repositories
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowRunsOn** (<code>Array<string></code>)  Github Runner selection labels. __*Default*__: ["ubuntu-latest"]
  * **workflowRunsOnGroup** (<code>[GroupRunnerOptions](#projen-grouprunneroptions)</code>)  Github Runner Group selection options. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain build artifacts. __*Default*__: "dist"
  * **autoApproveUpgrades** (<code>boolean</code>)  Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). __*Default*__: true
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **buildWorkflowOptions** (<code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code>)  Options for PR build workflow. __*Optional*__
  * **buildWorkflowTriggers** (<code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code>)  Build workflow triggers. __*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
  * **bundlerOptions** (<code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code>)  Options for `Bundler`. __*Optional*__
  * **checkLicenses** (<code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code>)  Configure which licenses should be deemed acceptable for use by dependencies. __*Default*__: no license checks are run during the build and all licenses will be accepted
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Use dependabot to handle dependency upgrades. __*Default*__: false
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **depsUpgrade** (<code>boolean</code>)  Use tasks and github workflows to handle dependency upgrades. __*Default*__: true
  * **depsUpgradeOptions** (<code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code>)  Options for `UpgradeDependencies`. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[javascript.JestOptions](#projen-javascript-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **npmIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .npmignore file. __*Optional*__
  * **package** (<code>boolean</code>)  Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). __*Default*__: true
  * **prettier** (<code>boolean</code>)  Setup prettier. __*Default*__: false
  * **prettierOptions** (<code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code>)  Prettier options. __*Default*__: default options
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true if not a subproject
  * **projenrcJs** (<code>boolean</code>)  Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. __*Default*__: true if projenrcJson is false
  * **projenrcJsOptions** (<code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code>)  Options for .projenrc.js. __*Default*__: default options
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>Array<string></code>)  The contents of the pull request template. __*Default*__: default content
  * **release** (<code>boolean</code>)  Add release management to this project. __*Default*__: true (false for subprojects)
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  DEPRECATED: renamed to `release`. __*Default*__: true if not a subproject
  * **workflowBootstrapSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowGitIdentity** (<code>[github.GitIdentity](#projen-github-gitidentity)</code>)  The git identity to use in workflows. __*Default*__: GitHub Actions
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **workflowPackageCache** (<code>boolean</code>)  Enable Node.js package cache in GitHub workflows. __*Default*__: false
  * **disableTsconfig** (<code>boolean</code>)  Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). __*Default*__: false
  * **disableTsconfigDev** (<code>boolean</code>)  Do not generate a `tsconfig.dev.json` file. __*Default*__: false
  * **docgen** (<code>boolean</code>)  Docgen by Typedoc. __*Default*__: false
  * **docsDirectory** (<code>string</code>)  Docs directory. __*Default*__: "docs"
  * **entrypointTypes** (<code>string</code>)  The .d.ts file that includes the type declarations for this module. __*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
  * **eslint** (<code>boolean</code>)  Setup eslint. __*Default*__: true
  * **eslintOptions** (<code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **libdir** (<code>string</code>)  Typescript  artifacts output directory. __*Default*__: "lib"
  * **projenrcTs** (<code>boolean</code>)  Use TypeScript for your projenrc file (`.projenrc.ts`). __*Default*__: false
  * **projenrcTsOptions** (<code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code>)  Options for .projenrc.ts. __*Optional*__
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **srcdir** (<code>string</code>)  Typescript sources directory. __*Default*__: "src"
  * **testdir** (<code>string</code>)  Jest tests directory. Tests files should be named `xxx.test.ts`. __*Default*__: "test"
  * **tsconfig** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom TSConfig. __*Default*__: default options
  * **tsconfigDev** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom tsconfig options for the development tsconfig.json file (used for testing). __*Default*__: use the production tsconfig options
  * **tsconfigDevFile** (<code>string</code>)  The name of the development tsconfig.json file. __*Default*__: "tsconfig.dev.json"
  * **tsJestOptions** (<code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code>)  Options for ts-jest. __*Optional*__
  * **typescriptVersion** (<code>string</code>)  TypeScript version to use. __*Default*__: "latest"
  * **buildCommand** (<code>string</code>)  A command to execute before synthesis. __*Default*__: no build command
  * **cdkout** (<code>string</code>)  cdk.out directory. __*Default*__: "cdk.out"
  * **context** (<code>Map<string, any></code>)  Additional context to include in `cdk.json`. __*Default*__: no additional context
  * **featureFlags** (<code>boolean</code>)  Include all feature flags in cdk.json. __*Default*__: true
  * **requireApproval** (<code>[awscdk.ApprovalLevel](#projen-awscdk-approvallevel)</code>)  To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. __*Default*__: ApprovalLevel.BROADENING
  * **watchExcludes** (<code>Array<string></code>)  Glob patterns to exclude from `cdk watch`. __*Default*__: []
  * **watchIncludes** (<code>Array<string></code>)  Glob patterns to include in `cdk watch`. __*Default*__: []
  * **cdkVersion** (<code>string</code>)  Minimum version of the AWS CDK to depend on. 
  * **cdkAssert** (<code>boolean</code>)  Warning: NodeJS only. __*Default*__: will be included by default for AWS CDK >= 1.0.0 < 2.0.0
  * **cdkAssertions** (<code>boolean</code>)  Install the assertions library? __*Default*__: will be included by default for AWS CDK >= 1.111.0 < 2.0.0
  * **cdkDependencies** (<code>Array<string></code>)  Which AWS CDKv1 modules this project requires. __*Optional*__
  * **cdkDependenciesAsDeps** (<code>boolean</code>)  If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). __*Default*__: true
  * **cdkTestDependencies** (<code>Array<string></code>)  AWS CDK modules required for testing. __*Optional*__
  * **cdkVersionPinning** (<code>boolean</code>)  Use pinned version instead of caret version for CDK. __*Optional*__
  * **constructsVersion** (<code>string</code>)  Minimum version of the `constructs` library to depend on. __*Default*__: for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".
  * **appEntrypoint** (<code>string</code>)  The CDK app's entrypoint (relative to the source directory, which is "src" by default). __*Default*__: "main.ts"
  * **edgeLambdaAutoDiscover** (<code>boolean</code>)  Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **experimentalIntegRunner** (<code>boolean</code>)  Enable experimental support for the AWS CDK integ-runner. __*Default*__: false
  * **integrationTestAutoDiscover** (<code>boolean</code>)  Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. __*Default*__: true
  * **lambdaAutoDiscover** (<code>boolean</code>)  Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **lambdaExtensionAutoDiscover** (<code>boolean</code>)  Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **lambdaOptions** (<code>[awscdk.LambdaFunctionCommonOptions](#projen-awscdk-lambdafunctioncommonoptions)</code>)  Common options for all AWS Lambda functions. __*Default*__: default options
  * **codeArtifact** (<code>boolean</code>)  Whether to enable integration with AWS CodeArtifact for package management. __*Default*__: false




## class TaimosCdkApp  <a id="taimos-projen-taimoscdkapp"></a>

AWS CDK app in TypeScript.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [awscdk.AwsCdkTypeScriptApp](#projen-awscdk-awscdktypescriptapp)

### Initializer




```ts
new TaimosCdkApp(options: TaimosCdkAppOptions)
```

* **options** (<code>[TaimosCdkAppOptions](#taimos-projen-taimoscdkappoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **commitGenerated** (<code>boolean</code>)  Whether to commit the managed files by default. __*Default*__: true
  * **gitIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .gitignore file. __*Optional*__
  * **gitOptions** (<code>[GitOptions](#projen-gitoptions)</code>)  Configuration options for git. __*Optional*__
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **projenrcJson** (<code>boolean</code>)  Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. __*Default*__: false
  * **projenrcJsonOptions** (<code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code>)  Options for .projenrc.json. __*Default*__: default options
  * **renovatebot** (<code>boolean</code>)  Use renovatebot to handle dependency upgrades. __*Default*__: false
  * **renovatebotOptions** (<code>[RenovatebotOptions](#projen-renovatebotoptions)</code>)  Options for renovatebot. __*Default*__: default options
  * **autoApproveOptions** (<code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code>)  Enable and configure the 'auto approve' workflow. __*Default*__: auto approve is disabled
  * **autoMerge** (<code>boolean</code>)  Enable automatic merging on GitHub. __*Default*__: true
  * **autoMergeOptions** (<code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code>)  Configure options for automatic merging on GitHub. __*Default*__: see defaults in `AutoMergeOptions`
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true, but false for subprojects
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **github** (<code>boolean</code>)  Enable GitHub integration. __*Default*__: true
  * **githubOptions** (<code>[github.GitHubOptions](#projen-github-githuboptions)</code>)  Options for GitHub integration. __*Default*__: see GitHubOptions
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **mergify** (<code>boolean</code>)  Whether mergify should be enabled on this repository or not. __*Default*__: true
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **projenCredentials** (<code>[github.GithubCredentials](#projen-github-githubcredentials)</code>)  Choose a method of providing GitHub API access for projen workflows. __*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
  * **projenTokenSecret** (<code>string</code>)  The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. __*Default*__: "PROJEN_GITHUB_TOKEN"
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **stale** (<code>boolean</code>)  Auto-close of stale issues and pull request. __*Default*__: false
  * **staleOptions** (<code>[github.StaleOptions](#projen-github-staleoptions)</code>)  Auto-close stale issues and pull requests. __*Default*__: see defaults in `StaleOptions`
  * **vscode** (<code>boolean</code>)  Enable VSCode integration. __*Default*__: true
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Is the author an organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bugsEmail** (<code>string</code>)  The email address to which issues should be reported. __*Optional*__
  * **bugsUrl** (<code>string</code>)  The url to your project's issue tracker. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
  * **codeArtifactOptions** (<code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code>)  Options for npm packages using AWS CodeArtifact. __*Default*__: undefined
  * **deps** (<code>Array<string></code>)  Runtime dependencies of this module. __*Default*__: []
  * **description** (<code>string</code>)  The description is just a string that helps people understand the purpose of the package. __*Optional*__
  * **devDeps** (<code>Array<string></code>)  Build dependencies for this module. __*Default*__: []
  * **entrypoint** (<code>string</code>)  Module entrypoint (`main` in `package.json`). __*Default*__: "lib/index.js"
  * **homepage** (<code>string</code>)  Package's Homepage / Website. __*Optional*__
  * **keywords** (<code>Array<string></code>)  Keywords to include in `package.json`. __*Optional*__
  * **license** (<code>string</code>)  License's SPDX identifier. __*Default*__: "Apache-2.0"
  * **licensed** (<code>boolean</code>)  Indicates if a license should be added. __*Default*__: true
  * **maxNodeVersion** (<code>string</code>)  Minimum node.js version to require via `engines` (inclusive). __*Default*__: no max
  * **minNodeVersion** (<code>string</code>)  Minimum Node.js version to require via package.json `engines` (inclusive). __*Default*__: no "engines" specified
  * **npmAccess** (<code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmProvenance** (<code>boolean</code>)  Should provenance statements be generated when the package is published. __*Default*__: true for public packages, false otherwise
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN_CLASSIC
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **pnpmVersion** (<code>string</code>)  The version of PNPM to use if using PNPM as a package manager. __*Default*__: "7"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scopedPackagesOptions** (<code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code>)  Options for privately hosted scoped packages. __*Default*__: fetch all scoped packages from the public npm registry
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **yarnBerryOptions** (<code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code>)  Options for Yarn Berry. __*Default*__: Yarn Berry v4 with all default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `publib` which is used to publish modules to npm. __*Default*__: "latest"
  * **majorVersion** (<code>number</code>)  Major version to release from the default branch. __*Default*__: Major version is not enforced.
  * **minMajorVersion** (<code>number</code>)  Minimal Major version to release. __*Default*__: No minimum version is being enforced
  * **npmDistTag** (<code>string</code>)  The npmDistTag to use when publishing from the default branch. __*Default*__: "latest"
  * **postBuildSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Steps to execute after build as part of the release workflow. __*Default*__: []
  * **prerelease** (<code>string</code>)  Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). __*Default*__: normal semantic versions
  * **publishDryRun** (<code>boolean</code>)  Instead of actually publishing to package managers, just print the publishing command. __*Default*__: false
  * **publishTasks** (<code>boolean</code>)  Define publishing tasks that can be executed manually as well as workflows. __*Default*__: false
  * **releasableCommits** (<code>[ReleasableCommits](#projen-releasablecommits)</code>)  Find commits that should be considered releasable Used to decide if a release is required. __*Default*__: ReleasableCommits.everyCommit()
  * **releaseBranches** (<code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code>)  Defines additional release branches. __*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseFailureIssue** (<code>boolean</code>)  Create a github issue on every failed publishing task. __*Default*__: false
  * **releaseFailureIssueLabel** (<code>string</code>)  The label to apply to issues indicating publish failures. __*Default*__: "failed-release"
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseTagPrefix** (<code>string</code>)  Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. __*Default*__: "v"
  * **releaseTrigger** (<code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code>)  The release trigger to use. __*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
  * **releaseWorkflowName** (<code>string</code>)  The name of the default release workflow. __*Default*__: "release"
  * **releaseWorkflowSetupSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **versionrcOptions** (<code>Map<string, any></code>)  Custom configuration used when creating changelog with standard-version package. __*Default*__: standard configuration applicable for GitHub repositories
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowRunsOn** (<code>Array<string></code>)  Github Runner selection labels. __*Default*__: ["ubuntu-latest"]
  * **workflowRunsOnGroup** (<code>[GroupRunnerOptions](#projen-grouprunneroptions)</code>)  Github Runner Group selection options. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain build artifacts. __*Default*__: "dist"
  * **autoApproveUpgrades** (<code>boolean</code>)  Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). __*Default*__: true
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **buildWorkflowOptions** (<code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code>)  Options for PR build workflow. __*Optional*__
  * **buildWorkflowTriggers** (<code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code>)  Build workflow triggers. __*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
  * **bundlerOptions** (<code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code>)  Options for `Bundler`. __*Optional*__
  * **checkLicenses** (<code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code>)  Configure which licenses should be deemed acceptable for use by dependencies. __*Default*__: no license checks are run during the build and all licenses will be accepted
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Use dependabot to handle dependency upgrades. __*Default*__: false
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **depsUpgrade** (<code>boolean</code>)  Use tasks and github workflows to handle dependency upgrades. __*Default*__: true
  * **depsUpgradeOptions** (<code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code>)  Options for `UpgradeDependencies`. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[javascript.JestOptions](#projen-javascript-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **npmIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .npmignore file. __*Optional*__
  * **package** (<code>boolean</code>)  Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). __*Default*__: true
  * **prettier** (<code>boolean</code>)  Setup prettier. __*Default*__: false
  * **prettierOptions** (<code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code>)  Prettier options. __*Default*__: default options
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true if not a subproject
  * **projenrcJs** (<code>boolean</code>)  Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. __*Default*__: true if projenrcJson is false
  * **projenrcJsOptions** (<code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code>)  Options for .projenrc.js. __*Default*__: default options
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>Array<string></code>)  The contents of the pull request template. __*Default*__: default content
  * **release** (<code>boolean</code>)  Add release management to this project. __*Default*__: true (false for subprojects)
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  DEPRECATED: renamed to `release`. __*Default*__: true if not a subproject
  * **workflowBootstrapSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowGitIdentity** (<code>[github.GitIdentity](#projen-github-gitidentity)</code>)  The git identity to use in workflows. __*Default*__: GitHub Actions
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **workflowPackageCache** (<code>boolean</code>)  Enable Node.js package cache in GitHub workflows. __*Default*__: false
  * **disableTsconfig** (<code>boolean</code>)  Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). __*Default*__: false
  * **disableTsconfigDev** (<code>boolean</code>)  Do not generate a `tsconfig.dev.json` file. __*Default*__: false
  * **docgen** (<code>boolean</code>)  Docgen by Typedoc. __*Default*__: false
  * **docsDirectory** (<code>string</code>)  Docs directory. __*Default*__: "docs"
  * **entrypointTypes** (<code>string</code>)  The .d.ts file that includes the type declarations for this module. __*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
  * **eslint** (<code>boolean</code>)  Setup eslint. __*Default*__: true
  * **eslintOptions** (<code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **libdir** (<code>string</code>)  Typescript  artifacts output directory. __*Default*__: "lib"
  * **projenrcTs** (<code>boolean</code>)  Use TypeScript for your projenrc file (`.projenrc.ts`). __*Default*__: false
  * **projenrcTsOptions** (<code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code>)  Options for .projenrc.ts. __*Optional*__
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **srcdir** (<code>string</code>)  Typescript sources directory. __*Default*__: "src"
  * **testdir** (<code>string</code>)  Jest tests directory. Tests files should be named `xxx.test.ts`. __*Default*__: "test"
  * **tsconfig** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom TSConfig. __*Default*__: default options
  * **tsconfigDev** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom tsconfig options for the development tsconfig.json file (used for testing). __*Default*__: use the production tsconfig options
  * **tsconfigDevFile** (<code>string</code>)  The name of the development tsconfig.json file. __*Default*__: "tsconfig.dev.json"
  * **tsJestOptions** (<code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code>)  Options for ts-jest. __*Optional*__
  * **typescriptVersion** (<code>string</code>)  TypeScript version to use. __*Default*__: "latest"
  * **buildCommand** (<code>string</code>)  A command to execute before synthesis. __*Default*__: no build command
  * **cdkout** (<code>string</code>)  cdk.out directory. __*Default*__: "cdk.out"
  * **context** (<code>Map<string, any></code>)  Additional context to include in `cdk.json`. __*Default*__: no additional context
  * **featureFlags** (<code>boolean</code>)  Include all feature flags in cdk.json. __*Default*__: true
  * **requireApproval** (<code>[awscdk.ApprovalLevel](#projen-awscdk-approvallevel)</code>)  To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. __*Default*__: ApprovalLevel.BROADENING
  * **watchExcludes** (<code>Array<string></code>)  Glob patterns to exclude from `cdk watch`. __*Default*__: []
  * **watchIncludes** (<code>Array<string></code>)  Glob patterns to include in `cdk watch`. __*Default*__: []
  * **cdkVersion** (<code>string</code>)  Minimum version of the AWS CDK to depend on. 
  * **cdkAssert** (<code>boolean</code>)  Warning: NodeJS only. __*Default*__: will be included by default for AWS CDK >= 1.0.0 < 2.0.0
  * **cdkAssertions** (<code>boolean</code>)  Install the assertions library? __*Default*__: will be included by default for AWS CDK >= 1.111.0 < 2.0.0
  * **cdkDependencies** (<code>Array<string></code>)  Which AWS CDKv1 modules this project requires. __*Optional*__
  * **cdkDependenciesAsDeps** (<code>boolean</code>)  If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). __*Default*__: true
  * **cdkTestDependencies** (<code>Array<string></code>)  AWS CDK modules required for testing. __*Optional*__
  * **cdkVersionPinning** (<code>boolean</code>)  Use pinned version instead of caret version for CDK. __*Optional*__
  * **constructsVersion** (<code>string</code>)  Minimum version of the `constructs` library to depend on. __*Default*__: for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".
  * **appEntrypoint** (<code>string</code>)  The CDK app's entrypoint (relative to the source directory, which is "src" by default). __*Default*__: "main.ts"
  * **edgeLambdaAutoDiscover** (<code>boolean</code>)  Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **experimentalIntegRunner** (<code>boolean</code>)  Enable experimental support for the AWS CDK integ-runner. __*Default*__: false
  * **integrationTestAutoDiscover** (<code>boolean</code>)  Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. __*Default*__: true
  * **lambdaAutoDiscover** (<code>boolean</code>)  Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **lambdaExtensionAutoDiscover** (<code>boolean</code>)  Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **lambdaOptions** (<code>[awscdk.LambdaFunctionCommonOptions](#projen-awscdk-lambdafunctioncommonoptions)</code>)  Common options for all AWS Lambda functions. __*Default*__: default options
  * **codeArtifact** (<code>boolean</code>)  Whether to enable integration with AWS CodeArtifact for package management. __*Default*__: false




## class TaimosCdkConstructLibrary  <a id="taimos-projen-taimoscdkconstructlibrary"></a>

TypeScript library.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [awscdk.AwsCdkConstructLibrary](#projen-awscdk-awscdkconstructlibrary)

### Initializer




```ts
new TaimosCdkConstructLibrary(options: TaimosCdkConstructLibraryOptions)
```

* **options** (<code>[TaimosCdkConstructLibraryOptions](#taimos-projen-taimoscdkconstructlibraryoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **commitGenerated** (<code>boolean</code>)  Whether to commit the managed files by default. __*Default*__: true
  * **gitIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .gitignore file. __*Optional*__
  * **gitOptions** (<code>[GitOptions](#projen-gitoptions)</code>)  Configuration options for git. __*Optional*__
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **projenrcJson** (<code>boolean</code>)  Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. __*Default*__: false
  * **projenrcJsonOptions** (<code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code>)  Options for .projenrc.json. __*Default*__: default options
  * **renovatebot** (<code>boolean</code>)  Use renovatebot to handle dependency upgrades. __*Default*__: false
  * **renovatebotOptions** (<code>[RenovatebotOptions](#projen-renovatebotoptions)</code>)  Options for renovatebot. __*Default*__: default options
  * **autoApproveOptions** (<code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code>)  Enable and configure the 'auto approve' workflow. __*Default*__: auto approve is disabled
  * **autoMerge** (<code>boolean</code>)  Enable automatic merging on GitHub. __*Default*__: true
  * **autoMergeOptions** (<code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code>)  Configure options for automatic merging on GitHub. __*Default*__: see defaults in `AutoMergeOptions`
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true, but false for subprojects
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **github** (<code>boolean</code>)  Enable GitHub integration. __*Default*__: true
  * **githubOptions** (<code>[github.GitHubOptions](#projen-github-githuboptions)</code>)  Options for GitHub integration. __*Default*__: see GitHubOptions
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **mergify** (<code>boolean</code>)  Whether mergify should be enabled on this repository or not. __*Default*__: true
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **projenCredentials** (<code>[github.GithubCredentials](#projen-github-githubcredentials)</code>)  Choose a method of providing GitHub API access for projen workflows. __*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
  * **projenTokenSecret** (<code>string</code>)  The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. __*Default*__: "PROJEN_GITHUB_TOKEN"
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **stale** (<code>boolean</code>)  Auto-close of stale issues and pull request. __*Default*__: false
  * **staleOptions** (<code>[github.StaleOptions](#projen-github-staleoptions)</code>)  Auto-close stale issues and pull requests. __*Default*__: see defaults in `StaleOptions`
  * **vscode** (<code>boolean</code>)  Enable VSCode integration. __*Default*__: true
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Is the author an organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bugsEmail** (<code>string</code>)  The email address to which issues should be reported. __*Optional*__
  * **bugsUrl** (<code>string</code>)  The url to your project's issue tracker. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
  * **codeArtifactOptions** (<code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code>)  Options for npm packages using AWS CodeArtifact. __*Default*__: undefined
  * **deps** (<code>Array<string></code>)  Runtime dependencies of this module. __*Default*__: []
  * **description** (<code>string</code>)  The description is just a string that helps people understand the purpose of the package. __*Optional*__
  * **devDeps** (<code>Array<string></code>)  Build dependencies for this module. __*Default*__: []
  * **entrypoint** (<code>string</code>)  Module entrypoint (`main` in `package.json`). __*Default*__: "lib/index.js"
  * **homepage** (<code>string</code>)  Package's Homepage / Website. __*Optional*__
  * **keywords** (<code>Array<string></code>)  Keywords to include in `package.json`. __*Optional*__
  * **license** (<code>string</code>)  License's SPDX identifier. __*Default*__: "Apache-2.0"
  * **licensed** (<code>boolean</code>)  Indicates if a license should be added. __*Default*__: true
  * **maxNodeVersion** (<code>string</code>)  Minimum node.js version to require via `engines` (inclusive). __*Default*__: no max
  * **minNodeVersion** (<code>string</code>)  Minimum Node.js version to require via package.json `engines` (inclusive). __*Default*__: no "engines" specified
  * **npmAccess** (<code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmProvenance** (<code>boolean</code>)  Should provenance statements be generated when the package is published. __*Default*__: true for public packages, false otherwise
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN_CLASSIC
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **pnpmVersion** (<code>string</code>)  The version of PNPM to use if using PNPM as a package manager. __*Default*__: "7"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scopedPackagesOptions** (<code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code>)  Options for privately hosted scoped packages. __*Default*__: fetch all scoped packages from the public npm registry
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **yarnBerryOptions** (<code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code>)  Options for Yarn Berry. __*Default*__: Yarn Berry v4 with all default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `publib` which is used to publish modules to npm. __*Default*__: "latest"
  * **majorVersion** (<code>number</code>)  Major version to release from the default branch. __*Default*__: Major version is not enforced.
  * **minMajorVersion** (<code>number</code>)  Minimal Major version to release. __*Default*__: No minimum version is being enforced
  * **npmDistTag** (<code>string</code>)  The npmDistTag to use when publishing from the default branch. __*Default*__: "latest"
  * **postBuildSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Steps to execute after build as part of the release workflow. __*Default*__: []
  * **prerelease** (<code>string</code>)  Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). __*Default*__: normal semantic versions
  * **publishDryRun** (<code>boolean</code>)  Instead of actually publishing to package managers, just print the publishing command. __*Default*__: false
  * **publishTasks** (<code>boolean</code>)  Define publishing tasks that can be executed manually as well as workflows. __*Default*__: false
  * **releasableCommits** (<code>[ReleasableCommits](#projen-releasablecommits)</code>)  Find commits that should be considered releasable Used to decide if a release is required. __*Default*__: ReleasableCommits.everyCommit()
  * **releaseBranches** (<code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code>)  Defines additional release branches. __*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseFailureIssue** (<code>boolean</code>)  Create a github issue on every failed publishing task. __*Default*__: false
  * **releaseFailureIssueLabel** (<code>string</code>)  The label to apply to issues indicating publish failures. __*Default*__: "failed-release"
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseTagPrefix** (<code>string</code>)  Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. __*Default*__: "v"
  * **releaseTrigger** (<code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code>)  The release trigger to use. __*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
  * **releaseWorkflowName** (<code>string</code>)  The name of the default release workflow. __*Default*__: "release"
  * **releaseWorkflowSetupSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **versionrcOptions** (<code>Map<string, any></code>)  Custom configuration used when creating changelog with standard-version package. __*Default*__: standard configuration applicable for GitHub repositories
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowRunsOn** (<code>Array<string></code>)  Github Runner selection labels. __*Default*__: ["ubuntu-latest"]
  * **workflowRunsOnGroup** (<code>[GroupRunnerOptions](#projen-grouprunneroptions)</code>)  Github Runner Group selection options. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain build artifacts. __*Default*__: "dist"
  * **autoApproveUpgrades** (<code>boolean</code>)  Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). __*Default*__: true
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **buildWorkflowOptions** (<code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code>)  Options for PR build workflow. __*Optional*__
  * **buildWorkflowTriggers** (<code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code>)  Build workflow triggers. __*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
  * **bundlerOptions** (<code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code>)  Options for `Bundler`. __*Optional*__
  * **checkLicenses** (<code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code>)  Configure which licenses should be deemed acceptable for use by dependencies. __*Default*__: no license checks are run during the build and all licenses will be accepted
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Use dependabot to handle dependency upgrades. __*Default*__: false
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **depsUpgrade** (<code>boolean</code>)  Use tasks and github workflows to handle dependency upgrades. __*Default*__: true
  * **depsUpgradeOptions** (<code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code>)  Options for `UpgradeDependencies`. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[javascript.JestOptions](#projen-javascript-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **npmIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .npmignore file. __*Optional*__
  * **package** (<code>boolean</code>)  Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). __*Default*__: true
  * **prettier** (<code>boolean</code>)  Setup prettier. __*Default*__: false
  * **prettierOptions** (<code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code>)  Prettier options. __*Default*__: default options
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true if not a subproject
  * **projenrcJs** (<code>boolean</code>)  Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. __*Default*__: true if projenrcJson is false
  * **projenrcJsOptions** (<code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code>)  Options for .projenrc.js. __*Default*__: default options
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>Array<string></code>)  The contents of the pull request template. __*Default*__: default content
  * **release** (<code>boolean</code>)  Add release management to this project. __*Default*__: true (false for subprojects)
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  DEPRECATED: renamed to `release`. __*Default*__: true if not a subproject
  * **workflowBootstrapSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowGitIdentity** (<code>[github.GitIdentity](#projen-github-gitidentity)</code>)  The git identity to use in workflows. __*Default*__: GitHub Actions
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **workflowPackageCache** (<code>boolean</code>)  Enable Node.js package cache in GitHub workflows. __*Default*__: false
  * **disableTsconfig** (<code>boolean</code>)  Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). __*Default*__: false
  * **disableTsconfigDev** (<code>boolean</code>)  Do not generate a `tsconfig.dev.json` file. __*Default*__: false
  * **docgen** (<code>boolean</code>)  Docgen by Typedoc. __*Default*__: false
  * **docsDirectory** (<code>string</code>)  Docs directory. __*Default*__: "docs"
  * **entrypointTypes** (<code>string</code>)  The .d.ts file that includes the type declarations for this module. __*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
  * **eslint** (<code>boolean</code>)  Setup eslint. __*Default*__: true
  * **eslintOptions** (<code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **libdir** (<code>string</code>)  Typescript  artifacts output directory. __*Default*__: "lib"
  * **projenrcTs** (<code>boolean</code>)  Use TypeScript for your projenrc file (`.projenrc.ts`). __*Default*__: false
  * **projenrcTsOptions** (<code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code>)  Options for .projenrc.ts. __*Optional*__
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **srcdir** (<code>string</code>)  Typescript sources directory. __*Default*__: "src"
  * **testdir** (<code>string</code>)  Jest tests directory. Tests files should be named `xxx.test.ts`. __*Default*__: "test"
  * **tsconfig** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom TSConfig. __*Default*__: default options
  * **tsconfigDev** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom tsconfig options for the development tsconfig.json file (used for testing). __*Default*__: use the production tsconfig options
  * **tsconfigDevFile** (<code>string</code>)  The name of the development tsconfig.json file. __*Default*__: "tsconfig.dev.json"
  * **tsJestOptions** (<code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code>)  Options for ts-jest. __*Optional*__
  * **typescriptVersion** (<code>string</code>)  TypeScript version to use. __*Default*__: "latest"
  * **author** (<code>string</code>)  The name of the library author. 
  * **authorAddress** (<code>string</code>)  Email or URL of the library author. 
  * **repositoryUrl** (<code>string</code>)  Git repository URL. 
  * **compat** (<code>boolean</code>)  Automatically run API compatibility test against the latest version published to npm after compilation. __*Default*__: false
  * **compatIgnore** (<code>string</code>)  Name of the ignore file for API compatibility tests. __*Default*__: ".compatignore"
  * **compressAssembly** (<code>boolean</code>)  Emit a compressed version of the assembly. __*Default*__: false
  * **docgenFilePath** (<code>string</code>)  File path for generated docs. __*Default*__: "API.md"
  * **dotnet** (<code>[cdk.JsiiDotNetTarget](#projen-cdk-jsiidotnettarget)</code>)  *No description* __*Optional*__
  * **excludeTypescript** (<code>Array<string></code>)  Accepts a list of glob patterns. __*Optional*__
  * **jsiiVersion** (<code>string</code>)  Version of the jsii compiler to use. __*Default*__: "1.x"
  * **publishToGo** (<code>[cdk.JsiiGoTarget](#projen-cdk-jsiigotarget)</code>)  Publish Go bindings to a git repository. __*Default*__: no publishing
  * **publishToMaven** (<code>[cdk.JsiiJavaTarget](#projen-cdk-jsiijavatarget)</code>)  Publish to maven. __*Default*__: no publishing
  * **publishToNuget** (<code>[cdk.JsiiDotNetTarget](#projen-cdk-jsiidotnettarget)</code>)  Publish to NuGet. __*Default*__: no publishing
  * **publishToPypi** (<code>[cdk.JsiiPythonTarget](#projen-cdk-jsiipythontarget)</code>)  Publish to pypi. __*Default*__: no publishing
  * **python** (<code>[cdk.JsiiPythonTarget](#projen-cdk-jsiipythontarget)</code>)  *No description* __*Optional*__
  * **rootdir** (<code>string</code>)  *No description* __*Default*__: "."
  * **catalog** (<code>[cdk.Catalog](#projen-cdk-catalog)</code>)  Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. __*Default*__: new version will be announced
  * **cdkVersion** (<code>string</code>)  Minimum version of the AWS CDK to depend on. 
  * **cdkAssert** (<code>boolean</code>)  Warning: NodeJS only. __*Default*__: will be included by default for AWS CDK >= 1.0.0 < 2.0.0
  * **cdkAssertions** (<code>boolean</code>)  Install the assertions library? __*Default*__: will be included by default for AWS CDK >= 1.111.0 < 2.0.0
  * **cdkDependencies** (<code>Array<string></code>)  Which AWS CDKv1 modules this project requires. __*Optional*__
  * **cdkDependenciesAsDeps** (<code>boolean</code>)  If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). __*Default*__: true
  * **cdkTestDependencies** (<code>Array<string></code>)  AWS CDK modules required for testing. __*Optional*__
  * **cdkVersionPinning** (<code>boolean</code>)  Use pinned version instead of caret version for CDK. __*Optional*__
  * **constructsVersion** (<code>string</code>)  Minimum version of the `constructs` library to depend on. __*Default*__: for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".
  * **edgeLambdaAutoDiscover** (<code>boolean</code>)  Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **experimentalIntegRunner** (<code>boolean</code>)  Enable experimental support for the AWS CDK integ-runner. __*Default*__: false
  * **integrationTestAutoDiscover** (<code>boolean</code>)  Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory. __*Default*__: true
  * **lambdaAutoDiscover** (<code>boolean</code>)  Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler. __*Default*__: true
  * **lambdaExtensionAutoDiscover** (<code>boolean</code>)  Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. __*Default*__: true
  * **lambdaOptions** (<code>[awscdk.LambdaFunctionCommonOptions](#projen-awscdk-lambdafunctioncommonoptions)</code>)  Common options for all AWS Lambda functions. __*Default*__: default options




## class TaimosPrivateTypescriptLibrary  <a id="taimos-projen-taimosprivatetypescriptlibrary"></a>

Private TypeScript library.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [TaimosTypescriptLibrary](#taimos-projen-taimostypescriptlibrary)

### Initializer




```ts
new TaimosPrivateTypescriptLibrary(options: TaimosPrivateTypescriptLibraryOptions)
```

* **options** (<code>[TaimosPrivateTypescriptLibraryOptions](#taimos-projen-taimosprivatetypescriptlibraryoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **commitGenerated** (<code>boolean</code>)  Whether to commit the managed files by default. __*Default*__: true
  * **gitIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .gitignore file. __*Optional*__
  * **gitOptions** (<code>[GitOptions](#projen-gitoptions)</code>)  Configuration options for git. __*Optional*__
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **projenrcJson** (<code>boolean</code>)  Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. __*Default*__: false
  * **projenrcJsonOptions** (<code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code>)  Options for .projenrc.json. __*Default*__: default options
  * **renovatebot** (<code>boolean</code>)  Use renovatebot to handle dependency upgrades. __*Default*__: false
  * **renovatebotOptions** (<code>[RenovatebotOptions](#projen-renovatebotoptions)</code>)  Options for renovatebot. __*Default*__: default options
  * **autoApproveOptions** (<code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code>)  Enable and configure the 'auto approve' workflow. __*Default*__: auto approve is disabled
  * **autoMerge** (<code>boolean</code>)  Enable automatic merging on GitHub. __*Default*__: true
  * **autoMergeOptions** (<code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code>)  Configure options for automatic merging on GitHub. __*Default*__: see defaults in `AutoMergeOptions`
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true, but false for subprojects
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **github** (<code>boolean</code>)  Enable GitHub integration. __*Default*__: true
  * **githubOptions** (<code>[github.GitHubOptions](#projen-github-githuboptions)</code>)  Options for GitHub integration. __*Default*__: see GitHubOptions
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **mergify** (<code>boolean</code>)  Whether mergify should be enabled on this repository or not. __*Default*__: true
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **projenCredentials** (<code>[github.GithubCredentials](#projen-github-githubcredentials)</code>)  Choose a method of providing GitHub API access for projen workflows. __*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
  * **projenTokenSecret** (<code>string</code>)  The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. __*Default*__: "PROJEN_GITHUB_TOKEN"
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **stale** (<code>boolean</code>)  Auto-close of stale issues and pull request. __*Default*__: false
  * **staleOptions** (<code>[github.StaleOptions](#projen-github-staleoptions)</code>)  Auto-close stale issues and pull requests. __*Default*__: see defaults in `StaleOptions`
  * **vscode** (<code>boolean</code>)  Enable VSCode integration. __*Default*__: true
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Is the author an organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bugsEmail** (<code>string</code>)  The email address to which issues should be reported. __*Optional*__
  * **bugsUrl** (<code>string</code>)  The url to your project's issue tracker. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
  * **codeArtifactOptions** (<code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code>)  Options for npm packages using AWS CodeArtifact. __*Default*__: undefined
  * **deps** (<code>Array<string></code>)  Runtime dependencies of this module. __*Default*__: []
  * **description** (<code>string</code>)  The description is just a string that helps people understand the purpose of the package. __*Optional*__
  * **devDeps** (<code>Array<string></code>)  Build dependencies for this module. __*Default*__: []
  * **entrypoint** (<code>string</code>)  Module entrypoint (`main` in `package.json`). __*Default*__: "lib/index.js"
  * **homepage** (<code>string</code>)  Package's Homepage / Website. __*Optional*__
  * **keywords** (<code>Array<string></code>)  Keywords to include in `package.json`. __*Optional*__
  * **license** (<code>string</code>)  License's SPDX identifier. __*Default*__: "Apache-2.0"
  * **licensed** (<code>boolean</code>)  Indicates if a license should be added. __*Default*__: true
  * **maxNodeVersion** (<code>string</code>)  Minimum node.js version to require via `engines` (inclusive). __*Default*__: no max
  * **minNodeVersion** (<code>string</code>)  Minimum Node.js version to require via package.json `engines` (inclusive). __*Default*__: no "engines" specified
  * **npmAccess** (<code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmProvenance** (<code>boolean</code>)  Should provenance statements be generated when the package is published. __*Default*__: true for public packages, false otherwise
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN_CLASSIC
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **pnpmVersion** (<code>string</code>)  The version of PNPM to use if using PNPM as a package manager. __*Default*__: "7"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scopedPackagesOptions** (<code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code>)  Options for privately hosted scoped packages. __*Default*__: fetch all scoped packages from the public npm registry
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **yarnBerryOptions** (<code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code>)  Options for Yarn Berry. __*Default*__: Yarn Berry v4 with all default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `publib` which is used to publish modules to npm. __*Default*__: "latest"
  * **majorVersion** (<code>number</code>)  Major version to release from the default branch. __*Default*__: Major version is not enforced.
  * **minMajorVersion** (<code>number</code>)  Minimal Major version to release. __*Default*__: No minimum version is being enforced
  * **npmDistTag** (<code>string</code>)  The npmDistTag to use when publishing from the default branch. __*Default*__: "latest"
  * **postBuildSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Steps to execute after build as part of the release workflow. __*Default*__: []
  * **prerelease** (<code>string</code>)  Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). __*Default*__: normal semantic versions
  * **publishDryRun** (<code>boolean</code>)  Instead of actually publishing to package managers, just print the publishing command. __*Default*__: false
  * **publishTasks** (<code>boolean</code>)  Define publishing tasks that can be executed manually as well as workflows. __*Default*__: false
  * **releasableCommits** (<code>[ReleasableCommits](#projen-releasablecommits)</code>)  Find commits that should be considered releasable Used to decide if a release is required. __*Default*__: ReleasableCommits.everyCommit()
  * **releaseBranches** (<code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code>)  Defines additional release branches. __*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseFailureIssue** (<code>boolean</code>)  Create a github issue on every failed publishing task. __*Default*__: false
  * **releaseFailureIssueLabel** (<code>string</code>)  The label to apply to issues indicating publish failures. __*Default*__: "failed-release"
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseTagPrefix** (<code>string</code>)  Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. __*Default*__: "v"
  * **releaseTrigger** (<code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code>)  The release trigger to use. __*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
  * **releaseWorkflowName** (<code>string</code>)  The name of the default release workflow. __*Default*__: "release"
  * **releaseWorkflowSetupSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **versionrcOptions** (<code>Map<string, any></code>)  Custom configuration used when creating changelog with standard-version package. __*Default*__: standard configuration applicable for GitHub repositories
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowRunsOn** (<code>Array<string></code>)  Github Runner selection labels. __*Default*__: ["ubuntu-latest"]
  * **workflowRunsOnGroup** (<code>[GroupRunnerOptions](#projen-grouprunneroptions)</code>)  Github Runner Group selection options. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain build artifacts. __*Default*__: "dist"
  * **autoApproveUpgrades** (<code>boolean</code>)  Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). __*Default*__: true
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **buildWorkflowOptions** (<code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code>)  Options for PR build workflow. __*Optional*__
  * **buildWorkflowTriggers** (<code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code>)  Build workflow triggers. __*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
  * **bundlerOptions** (<code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code>)  Options for `Bundler`. __*Optional*__
  * **checkLicenses** (<code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code>)  Configure which licenses should be deemed acceptable for use by dependencies. __*Default*__: no license checks are run during the build and all licenses will be accepted
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Use dependabot to handle dependency upgrades. __*Default*__: false
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **depsUpgrade** (<code>boolean</code>)  Use tasks and github workflows to handle dependency upgrades. __*Default*__: true
  * **depsUpgradeOptions** (<code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code>)  Options for `UpgradeDependencies`. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[javascript.JestOptions](#projen-javascript-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **npmIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .npmignore file. __*Optional*__
  * **package** (<code>boolean</code>)  Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). __*Default*__: true
  * **prettier** (<code>boolean</code>)  Setup prettier. __*Default*__: false
  * **prettierOptions** (<code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code>)  Prettier options. __*Default*__: default options
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true if not a subproject
  * **projenrcJs** (<code>boolean</code>)  Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. __*Default*__: true if projenrcJson is false
  * **projenrcJsOptions** (<code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code>)  Options for .projenrc.js. __*Default*__: default options
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>Array<string></code>)  The contents of the pull request template. __*Default*__: default content
  * **release** (<code>boolean</code>)  Add release management to this project. __*Default*__: true (false for subprojects)
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  DEPRECATED: renamed to `release`. __*Default*__: true if not a subproject
  * **workflowBootstrapSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowGitIdentity** (<code>[github.GitIdentity](#projen-github-gitidentity)</code>)  The git identity to use in workflows. __*Default*__: GitHub Actions
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **workflowPackageCache** (<code>boolean</code>)  Enable Node.js package cache in GitHub workflows. __*Default*__: false
  * **disableTsconfig** (<code>boolean</code>)  Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). __*Default*__: false
  * **disableTsconfigDev** (<code>boolean</code>)  Do not generate a `tsconfig.dev.json` file. __*Default*__: false
  * **docgen** (<code>boolean</code>)  Docgen by Typedoc. __*Default*__: false
  * **docsDirectory** (<code>string</code>)  Docs directory. __*Default*__: "docs"
  * **entrypointTypes** (<code>string</code>)  The .d.ts file that includes the type declarations for this module. __*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
  * **eslint** (<code>boolean</code>)  Setup eslint. __*Default*__: true
  * **eslintOptions** (<code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **libdir** (<code>string</code>)  Typescript  artifacts output directory. __*Default*__: "lib"
  * **projenrcTs** (<code>boolean</code>)  Use TypeScript for your projenrc file (`.projenrc.ts`). __*Default*__: false
  * **projenrcTsOptions** (<code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code>)  Options for .projenrc.ts. __*Optional*__
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **srcdir** (<code>string</code>)  Typescript sources directory. __*Default*__: "src"
  * **testdir** (<code>string</code>)  Jest tests directory. Tests files should be named `xxx.test.ts`. __*Default*__: "test"
  * **tsconfig** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom TSConfig. __*Default*__: default options
  * **tsconfigDev** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom tsconfig options for the development tsconfig.json file (used for testing). __*Default*__: use the production tsconfig options
  * **tsconfigDevFile** (<code>string</code>)  The name of the development tsconfig.json file. __*Default*__: "tsconfig.dev.json"
  * **tsJestOptions** (<code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code>)  Options for ts-jest. __*Optional*__
  * **typescriptVersion** (<code>string</code>)  TypeScript version to use. __*Default*__: "latest"




## class TaimosTypescriptLibrary  <a id="taimos-projen-taimostypescriptlibrary"></a>

TypeScript library.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [typescript.TypeScriptProject](#projen-typescript-typescriptproject)

### Initializer




```ts
new TaimosTypescriptLibrary(options: TaimosTypescriptLibraryOptions)
```

* **options** (<code>[TaimosTypescriptLibraryOptions](#taimos-projen-taimostypescriptlibraryoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **commitGenerated** (<code>boolean</code>)  Whether to commit the managed files by default. __*Default*__: true
  * **gitIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .gitignore file. __*Optional*__
  * **gitOptions** (<code>[GitOptions](#projen-gitoptions)</code>)  Configuration options for git. __*Optional*__
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **projenrcJson** (<code>boolean</code>)  Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. __*Default*__: false
  * **projenrcJsonOptions** (<code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code>)  Options for .projenrc.json. __*Default*__: default options
  * **renovatebot** (<code>boolean</code>)  Use renovatebot to handle dependency upgrades. __*Default*__: false
  * **renovatebotOptions** (<code>[RenovatebotOptions](#projen-renovatebotoptions)</code>)  Options for renovatebot. __*Default*__: default options
  * **autoApproveOptions** (<code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code>)  Enable and configure the 'auto approve' workflow. __*Default*__: auto approve is disabled
  * **autoMerge** (<code>boolean</code>)  Enable automatic merging on GitHub. __*Default*__: true
  * **autoMergeOptions** (<code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code>)  Configure options for automatic merging on GitHub. __*Default*__: see defaults in `AutoMergeOptions`
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true, but false for subprojects
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **github** (<code>boolean</code>)  Enable GitHub integration. __*Default*__: true
  * **githubOptions** (<code>[github.GitHubOptions](#projen-github-githuboptions)</code>)  Options for GitHub integration. __*Default*__: see GitHubOptions
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **mergify** (<code>boolean</code>)  Whether mergify should be enabled on this repository or not. __*Default*__: true
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **projenCredentials** (<code>[github.GithubCredentials](#projen-github-githubcredentials)</code>)  Choose a method of providing GitHub API access for projen workflows. __*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
  * **projenTokenSecret** (<code>string</code>)  The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. __*Default*__: "PROJEN_GITHUB_TOKEN"
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **stale** (<code>boolean</code>)  Auto-close of stale issues and pull request. __*Default*__: false
  * **staleOptions** (<code>[github.StaleOptions](#projen-github-staleoptions)</code>)  Auto-close stale issues and pull requests. __*Default*__: see defaults in `StaleOptions`
  * **vscode** (<code>boolean</code>)  Enable VSCode integration. __*Default*__: true
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Is the author an organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bugsEmail** (<code>string</code>)  The email address to which issues should be reported. __*Optional*__
  * **bugsUrl** (<code>string</code>)  The url to your project's issue tracker. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
  * **codeArtifactOptions** (<code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code>)  Options for npm packages using AWS CodeArtifact. __*Default*__: undefined
  * **deps** (<code>Array<string></code>)  Runtime dependencies of this module. __*Default*__: []
  * **description** (<code>string</code>)  The description is just a string that helps people understand the purpose of the package. __*Optional*__
  * **devDeps** (<code>Array<string></code>)  Build dependencies for this module. __*Default*__: []
  * **entrypoint** (<code>string</code>)  Module entrypoint (`main` in `package.json`). __*Default*__: "lib/index.js"
  * **homepage** (<code>string</code>)  Package's Homepage / Website. __*Optional*__
  * **keywords** (<code>Array<string></code>)  Keywords to include in `package.json`. __*Optional*__
  * **license** (<code>string</code>)  License's SPDX identifier. __*Default*__: "Apache-2.0"
  * **licensed** (<code>boolean</code>)  Indicates if a license should be added. __*Default*__: true
  * **maxNodeVersion** (<code>string</code>)  Minimum node.js version to require via `engines` (inclusive). __*Default*__: no max
  * **minNodeVersion** (<code>string</code>)  Minimum Node.js version to require via package.json `engines` (inclusive). __*Default*__: no "engines" specified
  * **npmAccess** (<code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmProvenance** (<code>boolean</code>)  Should provenance statements be generated when the package is published. __*Default*__: true for public packages, false otherwise
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN_CLASSIC
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **pnpmVersion** (<code>string</code>)  The version of PNPM to use if using PNPM as a package manager. __*Default*__: "7"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scopedPackagesOptions** (<code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code>)  Options for privately hosted scoped packages. __*Default*__: fetch all scoped packages from the public npm registry
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **yarnBerryOptions** (<code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code>)  Options for Yarn Berry. __*Default*__: Yarn Berry v4 with all default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `publib` which is used to publish modules to npm. __*Default*__: "latest"
  * **majorVersion** (<code>number</code>)  Major version to release from the default branch. __*Default*__: Major version is not enforced.
  * **minMajorVersion** (<code>number</code>)  Minimal Major version to release. __*Default*__: No minimum version is being enforced
  * **npmDistTag** (<code>string</code>)  The npmDistTag to use when publishing from the default branch. __*Default*__: "latest"
  * **postBuildSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Steps to execute after build as part of the release workflow. __*Default*__: []
  * **prerelease** (<code>string</code>)  Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). __*Default*__: normal semantic versions
  * **publishDryRun** (<code>boolean</code>)  Instead of actually publishing to package managers, just print the publishing command. __*Default*__: false
  * **publishTasks** (<code>boolean</code>)  Define publishing tasks that can be executed manually as well as workflows. __*Default*__: false
  * **releasableCommits** (<code>[ReleasableCommits](#projen-releasablecommits)</code>)  Find commits that should be considered releasable Used to decide if a release is required. __*Default*__: ReleasableCommits.everyCommit()
  * **releaseBranches** (<code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code>)  Defines additional release branches. __*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseFailureIssue** (<code>boolean</code>)  Create a github issue on every failed publishing task. __*Default*__: false
  * **releaseFailureIssueLabel** (<code>string</code>)  The label to apply to issues indicating publish failures. __*Default*__: "failed-release"
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseTagPrefix** (<code>string</code>)  Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. __*Default*__: "v"
  * **releaseTrigger** (<code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code>)  The release trigger to use. __*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
  * **releaseWorkflowName** (<code>string</code>)  The name of the default release workflow. __*Default*__: "release"
  * **releaseWorkflowSetupSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **versionrcOptions** (<code>Map<string, any></code>)  Custom configuration used when creating changelog with standard-version package. __*Default*__: standard configuration applicable for GitHub repositories
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowRunsOn** (<code>Array<string></code>)  Github Runner selection labels. __*Default*__: ["ubuntu-latest"]
  * **workflowRunsOnGroup** (<code>[GroupRunnerOptions](#projen-grouprunneroptions)</code>)  Github Runner Group selection options. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain build artifacts. __*Default*__: "dist"
  * **autoApproveUpgrades** (<code>boolean</code>)  Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). __*Default*__: true
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **buildWorkflowOptions** (<code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code>)  Options for PR build workflow. __*Optional*__
  * **buildWorkflowTriggers** (<code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code>)  Build workflow triggers. __*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
  * **bundlerOptions** (<code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code>)  Options for `Bundler`. __*Optional*__
  * **checkLicenses** (<code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code>)  Configure which licenses should be deemed acceptable for use by dependencies. __*Default*__: no license checks are run during the build and all licenses will be accepted
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Use dependabot to handle dependency upgrades. __*Default*__: false
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **depsUpgrade** (<code>boolean</code>)  Use tasks and github workflows to handle dependency upgrades. __*Default*__: true
  * **depsUpgradeOptions** (<code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code>)  Options for `UpgradeDependencies`. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[javascript.JestOptions](#projen-javascript-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **npmIgnoreOptions** (<code>[IgnoreFileOptions](#projen-ignorefileoptions)</code>)  Configuration options for .npmignore file. __*Optional*__
  * **package** (<code>boolean</code>)  Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). __*Default*__: true
  * **prettier** (<code>boolean</code>)  Setup prettier. __*Default*__: false
  * **prettierOptions** (<code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code>)  Prettier options. __*Default*__: default options
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true if not a subproject
  * **projenrcJs** (<code>boolean</code>)  Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. __*Default*__: true if projenrcJson is false
  * **projenrcJsOptions** (<code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code>)  Options for .projenrc.js. __*Default*__: default options
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>Array<string></code>)  The contents of the pull request template. __*Default*__: default content
  * **release** (<code>boolean</code>)  Add release management to this project. __*Default*__: true (false for subprojects)
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  DEPRECATED: renamed to `release`. __*Default*__: true if not a subproject
  * **workflowBootstrapSteps** (<code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowGitIdentity** (<code>[github.GitIdentity](#projen-github-gitidentity)</code>)  The git identity to use in workflows. __*Default*__: GitHub Actions
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **workflowPackageCache** (<code>boolean</code>)  Enable Node.js package cache in GitHub workflows. __*Default*__: false
  * **disableTsconfig** (<code>boolean</code>)  Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). __*Default*__: false
  * **disableTsconfigDev** (<code>boolean</code>)  Do not generate a `tsconfig.dev.json` file. __*Default*__: false
  * **docgen** (<code>boolean</code>)  Docgen by Typedoc. __*Default*__: false
  * **docsDirectory** (<code>string</code>)  Docs directory. __*Default*__: "docs"
  * **entrypointTypes** (<code>string</code>)  The .d.ts file that includes the type declarations for this module. __*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
  * **eslint** (<code>boolean</code>)  Setup eslint. __*Default*__: true
  * **eslintOptions** (<code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **libdir** (<code>string</code>)  Typescript  artifacts output directory. __*Default*__: "lib"
  * **projenrcTs** (<code>boolean</code>)  Use TypeScript for your projenrc file (`.projenrc.ts`). __*Default*__: false
  * **projenrcTsOptions** (<code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code>)  Options for .projenrc.ts. __*Optional*__
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **srcdir** (<code>string</code>)  Typescript sources directory. __*Default*__: "src"
  * **testdir** (<code>string</code>)  Jest tests directory. Tests files should be named `xxx.test.ts`. __*Default*__: "test"
  * **tsconfig** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom TSConfig. __*Default*__: default options
  * **tsconfigDev** (<code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code>)  Custom tsconfig options for the development tsconfig.json file (used for testing). __*Default*__: use the production tsconfig options
  * **tsconfigDevFile** (<code>string</code>)  The name of the development tsconfig.json file. __*Default*__: "tsconfig.dev.json"
  * **tsJestOptions** (<code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code>)  Options for ts-jest. __*Optional*__
  * **typescriptVersion** (<code>string</code>)  TypeScript version to use. __*Default*__: "latest"




## struct PrivateTaimosCdkAppOptions  <a id="taimos-projen-privatetaimoscdkappoptions"></a>






Name | Type | Description 
-----|------|-------------
**cdkVersion**🔹 | <code>string</code> | Minimum version of the AWS CDK to depend on.
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**appEntrypoint**?🔹 | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default).<br/>__*Default*__: "main.ts"
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain build artifacts.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Is the author an organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoApproveOptions**?🔹 | <code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code> | Enable and configure the 'auto approve' workflow.<br/>__*Default*__: auto approve is disabled
**autoApproveUpgrades**?🔹 | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).<br/>__*Default*__: true
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**autoMerge**?🔹 | <code>boolean</code> | Enable automatic merging on GitHub.<br/>__*Default*__: true
**autoMergeOptions**?🔹 | <code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code> | Configure options for automatic merging on GitHub.<br/>__*Default*__: see defaults in `AutoMergeOptions`
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**bugsEmail**?🔹 | <code>string</code> | The email address to which issues should be reported.<br/>__*Optional*__
**bugsUrl**?🔹 | <code>string</code> | The url to your project's issue tracker.<br/>__*Optional*__
**buildCommand**?🔹 | <code>string</code> | A command to execute before synthesis.<br/>__*Default*__: no build command
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**buildWorkflowOptions**?🔹 | <code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code> | Options for PR build workflow.<br/>__*Optional*__
**buildWorkflowTriggers**?⚠️ | <code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code> | Build workflow triggers.<br/>__*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**bundlerOptions**?🔹 | <code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code> | Options for `Bundler`.<br/>__*Optional*__
**cdkAssert**?⚠️ | <code>boolean</code> | Warning: NodeJS only.<br/>__*Default*__: will be included by default for AWS CDK >= 1.0.0 < 2.0.0
**cdkAssertions**?🔹 | <code>boolean</code> | Install the assertions library?<br/>__*Default*__: will be included by default for AWS CDK >= 1.111.0 < 2.0.0
**cdkDependencies**?⚠️ | <code>Array<string></code> | Which AWS CDKv1 modules this project requires.<br/>__*Optional*__
**cdkDependenciesAsDeps**?⚠️ | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).<br/>__*Default*__: true
**cdkTestDependencies**?⚠️ | <code>Array<string></code> | AWS CDK modules required for testing.<br/>__*Optional*__
**cdkVersionPinning**?🔹 | <code>boolean</code> | Use pinned version instead of caret version for CDK.<br/>__*Optional*__
**cdkout**?🔹 | <code>string</code> | cdk.out directory.<br/>__*Default*__: "cdk.out"
**checkLicenses**?🔹 | <code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code> | Configure which licenses should be deemed acceptable for use by dependencies.<br/>__*Default*__: no license checks are run during the build and all licenses will be accepted
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true, but false for subprojects
**codeArtifact**? | <code>boolean</code> | Whether to enable integration with AWS CodeArtifact for package management.<br/>__*Default*__: false
**codeArtifactOptions**?🔹 | <code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code> | Options for npm packages using AWS CodeArtifact.<br/>__*Default*__: undefined
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**commitGenerated**?🔹 | <code>boolean</code> | Whether to commit the managed files by default.<br/>__*Default*__: true
**constructsVersion**?🔹 | <code>string</code> | Minimum version of the `constructs` library to depend on.<br/>__*Default*__: for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".
**context**?🔹 | <code>Map<string, any></code> | Additional context to include in `cdk.json`.<br/>__*Default*__: no additional context
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Use dependabot to handle dependency upgrades.<br/>__*Default*__: false
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**depsUpgrade**?🔹 | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades.<br/>__*Default*__: true
**depsUpgradeOptions**?🔹 | <code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code> | Options for `UpgradeDependencies`.<br/>__*Default*__: default options
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**disableTsconfig**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).<br/>__*Default*__: false
**disableTsconfigDev**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file.<br/>__*Default*__: false
**docgen**?🔹 | <code>boolean</code> | Docgen by Typedoc.<br/>__*Default*__: false
**docsDirectory**?🔹 | <code>string</code> | Docs directory.<br/>__*Default*__: "docs"
**edgeLambdaAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**entrypointTypes**?🔹 | <code>string</code> | The .d.ts file that includes the type declarations for this module.<br/>__*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
**eslint**?🔹 | <code>boolean</code> | Setup eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**experimentalIntegRunner**?🔹 | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner.<br/>__*Default*__: false
**featureFlags**?🔹 | <code>boolean</code> | Include all feature flags in cdk.json.<br/>__*Default*__: true
**gitIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .gitignore file.<br/>__*Optional*__
**gitOptions**?🔹 | <code>[GitOptions](#projen-gitoptions)</code> | Configuration options for git.<br/>__*Optional*__
**github**?🔹 | <code>boolean</code> | Enable GitHub integration.<br/>__*Default*__: true
**githubOptions**?🔹 | <code>[github.GitHubOptions](#projen-github-githuboptions)</code> | Options for GitHub integration.<br/>__*Default*__: see GitHubOptions
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**integrationTestAutoDiscover**?🔹 | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.<br/>__*Default*__: true
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[javascript.JestOptions](#projen-javascript-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**lambdaAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**lambdaExtensionAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**lambdaOptions**?🔹 | <code>[awscdk.LambdaFunctionCommonOptions](#projen-awscdk-lambdafunctioncommonoptions)</code> | Common options for all AWS Lambda functions.<br/>__*Default*__: default options
**libdir**?🔹 | <code>string</code> | Typescript  artifacts output directory.<br/>__*Default*__: "lib"
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**majorVersion**?🔹 | <code>number</code> | Major version to release from the default branch.<br/>__*Default*__: Major version is not enforced.
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?⚠️ | <code>boolean</code> | Whether mergify should be enabled on this repository or not.<br/>__*Default*__: true
**mergifyOptions**?⚠️ | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minMajorVersion**?🔹 | <code>number</code> | Minimal Major version to release.<br/>__*Default*__: No minimum version is being enforced
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?⚠️ | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | The npmDistTag to use when publishing from the default branch.<br/>__*Default*__: "latest"
**npmIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .npmignore file.<br/>__*Optional*__
**npmProvenance**?🔹 | <code>boolean</code> | Should provenance statements be generated when the package is published.<br/>__*Default*__: true for public packages, false otherwise
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?⚠️ | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**package**?🔹 | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).<br/>__*Default*__: true
**packageManager**?🔹 | <code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN_CLASSIC
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**pnpmVersion**?🔹 | <code>string</code> | The version of PNPM to use if using PNPM as a package manager.<br/>__*Default*__: "7"
**postBuildSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Steps to execute after build as part of the release workflow.<br/>__*Default*__: []
**prerelease**?🔹 | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").<br/>__*Default*__: normal semantic versions
**prettier**?🔹 | <code>boolean</code> | Setup prettier.<br/>__*Default*__: false
**prettierOptions**?🔹 | <code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code> | Prettier options.<br/>__*Default*__: default options
**projectType**?⚠️ | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenCredentials**?🔹 | <code>[github.GithubCredentials](#projen-github-githubcredentials)</code> | Choose a method of providing GitHub API access for projen workflows.<br/>__*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true if not a subproject
**projenTokenSecret**?⚠️ | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.<br/>__*Default*__: "PROJEN_GITHUB_TOKEN"
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**projenrcJs**?🔹 | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.<br/>__*Default*__: true if projenrcJson is false
**projenrcJsOptions**?🔹 | <code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code> | Options for .projenrc.js.<br/>__*Default*__: default options
**projenrcJson**?🔹 | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.<br/>__*Default*__: false
**projenrcJsonOptions**?🔹 | <code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code> | Options for .projenrc.json.<br/>__*Default*__: default options
**projenrcTs**?🔹 | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`).<br/>__*Default*__: false
**projenrcTsOptions**?🔹 | <code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code> | Options for .projenrc.ts.<br/>__*Optional*__
**publishDryRun**?🔹 | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command.<br/>__*Default*__: false
**publishTasks**?🔹 | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows.<br/>__*Default*__: false
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>Array<string></code> | The contents of the pull request template.<br/>__*Default*__: default content
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releasableCommits**?🔹 | <code>[ReleasableCommits](#projen-releasablecommits)</code> | Find commits that should be considered releasable Used to decide if a release is required.<br/>__*Default*__: ReleasableCommits.everyCommit()
**release**?🔹 | <code>boolean</code> | Add release management to this project.<br/>__*Default*__: true (false for subprojects)
**releaseBranches**?🔹 | <code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code> | Defines additional release branches.<br/>__*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
**releaseEveryCommit**?⚠️ | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseFailureIssue**?🔹 | <code>boolean</code> | Create a github issue on every failed publishing task.<br/>__*Default*__: false
**releaseFailureIssueLabel**?🔹 | <code>string</code> | The label to apply to issues indicating publish failures.<br/>__*Default*__: "failed-release"
**releaseSchedule**?⚠️ | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseTagPrefix**?🔹 | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.<br/>__*Default*__: "v"
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseTrigger**?🔹 | <code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code> | The release trigger to use.<br/>__*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
**releaseWorkflow**?⚠️ | <code>boolean</code> | DEPRECATED: renamed to `release`.<br/>__*Default*__: true if not a subproject
**releaseWorkflowName**?🔹 | <code>string</code> | The name of the default release workflow.<br/>__*Default*__: "release"
**releaseWorkflowSetupSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**renovatebot**?🔹 | <code>boolean</code> | Use renovatebot to handle dependency upgrades.<br/>__*Default*__: false
**renovatebotOptions**?🔹 | <code>[RenovatebotOptions](#projen-renovatebotoptions)</code> | Options for renovatebot.<br/>__*Default*__: default options
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**requireApproval**?🔹 | <code>[awscdk.ApprovalLevel](#projen-awscdk-approvallevel)</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.<br/>__*Default*__: ApprovalLevel.BROADENING
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scopedPackagesOptions**?🔹 | <code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code> | Options for privately hosted scoped packages.<br/>__*Default*__: fetch all scoped packages from the public npm registry
**scripts**?⚠️ | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**srcdir**?🔹 | <code>string</code> | Typescript sources directory.<br/>__*Default*__: "src"
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**stale**?🔹 | <code>boolean</code> | Auto-close of stale issues and pull request.<br/>__*Default*__: false
**staleOptions**?🔹 | <code>[github.StaleOptions](#projen-github-staleoptions)</code> | Auto-close stale issues and pull requests.<br/>__*Default*__: see defaults in `StaleOptions`
**testdir**?🔹 | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`.<br/>__*Default*__: "test"
**tsJestOptions**?🔹 | <code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code> | Options for ts-jest.<br/>__*Optional*__
**tsconfig**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom TSConfig.<br/>__*Default*__: default options
**tsconfigDev**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom tsconfig options for the development tsconfig.json file (used for testing).<br/>__*Default*__: use the production tsconfig options
**tsconfigDevFile**?🔹 | <code>string</code> | The name of the development tsconfig.json file.<br/>__*Default*__: "tsconfig.dev.json"
**typescriptVersion**?🔹 | <code>string</code> | TypeScript version to use.<br/>__*Default*__: "latest"
**versionrcOptions**?🔹 | <code>Map<string, any></code> | Custom configuration used when creating changelog with standard-version package.<br/>__*Default*__: standard configuration applicable for GitHub repositories
**vscode**?🔹 | <code>boolean</code> | Enable VSCode integration.<br/>__*Default*__: true
**watchExcludes**?🔹 | <code>Array<string></code> | Glob patterns to exclude from `cdk watch`.<br/>__*Default*__: []
**watchIncludes**?🔹 | <code>Array<string></code> | Glob patterns to include in `cdk watch`.<br/>__*Default*__: []
**workflowBootstrapSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowGitIdentity**?🔹 | <code>[github.GitIdentity](#projen-github-gitidentity)</code> | The git identity to use in workflows.<br/>__*Default*__: GitHub Actions
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`
**workflowPackageCache**?🔹 | <code>boolean</code> | Enable Node.js package cache in GitHub workflows.<br/>__*Default*__: false
**workflowRunsOn**?🔹 | <code>Array<string></code> | Github Runner selection labels.<br/>__*Default*__: ["ubuntu-latest"]
**workflowRunsOnGroup**?🔹 | <code>[GroupRunnerOptions](#projen-grouprunneroptions)</code> | Github Runner Group selection options.<br/>__*Optional*__
**yarnBerryOptions**?🔹 | <code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code> | Options for Yarn Berry.<br/>__*Default*__: Yarn Berry v4 with all default options



## struct TaimosCdkAppOptions  <a id="taimos-projen-taimoscdkappoptions"></a>






Name | Type | Description 
-----|------|-------------
**cdkVersion**🔹 | <code>string</code> | Minimum version of the AWS CDK to depend on.
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**appEntrypoint**?🔹 | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default).<br/>__*Default*__: "main.ts"
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain build artifacts.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Is the author an organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoApproveOptions**?🔹 | <code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code> | Enable and configure the 'auto approve' workflow.<br/>__*Default*__: auto approve is disabled
**autoApproveUpgrades**?🔹 | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).<br/>__*Default*__: true
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**autoMerge**?🔹 | <code>boolean</code> | Enable automatic merging on GitHub.<br/>__*Default*__: true
**autoMergeOptions**?🔹 | <code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code> | Configure options for automatic merging on GitHub.<br/>__*Default*__: see defaults in `AutoMergeOptions`
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**bugsEmail**?🔹 | <code>string</code> | The email address to which issues should be reported.<br/>__*Optional*__
**bugsUrl**?🔹 | <code>string</code> | The url to your project's issue tracker.<br/>__*Optional*__
**buildCommand**?🔹 | <code>string</code> | A command to execute before synthesis.<br/>__*Default*__: no build command
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**buildWorkflowOptions**?🔹 | <code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code> | Options for PR build workflow.<br/>__*Optional*__
**buildWorkflowTriggers**?⚠️ | <code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code> | Build workflow triggers.<br/>__*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**bundlerOptions**?🔹 | <code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code> | Options for `Bundler`.<br/>__*Optional*__
**cdkAssert**?⚠️ | <code>boolean</code> | Warning: NodeJS only.<br/>__*Default*__: will be included by default for AWS CDK >= 1.0.0 < 2.0.0
**cdkAssertions**?🔹 | <code>boolean</code> | Install the assertions library?<br/>__*Default*__: will be included by default for AWS CDK >= 1.111.0 < 2.0.0
**cdkDependencies**?⚠️ | <code>Array<string></code> | Which AWS CDKv1 modules this project requires.<br/>__*Optional*__
**cdkDependenciesAsDeps**?⚠️ | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).<br/>__*Default*__: true
**cdkTestDependencies**?⚠️ | <code>Array<string></code> | AWS CDK modules required for testing.<br/>__*Optional*__
**cdkVersionPinning**?🔹 | <code>boolean</code> | Use pinned version instead of caret version for CDK.<br/>__*Optional*__
**cdkout**?🔹 | <code>string</code> | cdk.out directory.<br/>__*Default*__: "cdk.out"
**checkLicenses**?🔹 | <code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code> | Configure which licenses should be deemed acceptable for use by dependencies.<br/>__*Default*__: no license checks are run during the build and all licenses will be accepted
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true, but false for subprojects
**codeArtifact**? | <code>boolean</code> | Whether to enable integration with AWS CodeArtifact for package management.<br/>__*Default*__: false
**codeArtifactOptions**?🔹 | <code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code> | Options for npm packages using AWS CodeArtifact.<br/>__*Default*__: undefined
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**commitGenerated**?🔹 | <code>boolean</code> | Whether to commit the managed files by default.<br/>__*Default*__: true
**constructsVersion**?🔹 | <code>string</code> | Minimum version of the `constructs` library to depend on.<br/>__*Default*__: for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".
**context**?🔹 | <code>Map<string, any></code> | Additional context to include in `cdk.json`.<br/>__*Default*__: no additional context
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Use dependabot to handle dependency upgrades.<br/>__*Default*__: false
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**depsUpgrade**?🔹 | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades.<br/>__*Default*__: true
**depsUpgradeOptions**?🔹 | <code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code> | Options for `UpgradeDependencies`.<br/>__*Default*__: default options
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**disableTsconfig**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).<br/>__*Default*__: false
**disableTsconfigDev**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file.<br/>__*Default*__: false
**docgen**?🔹 | <code>boolean</code> | Docgen by Typedoc.<br/>__*Default*__: false
**docsDirectory**?🔹 | <code>string</code> | Docs directory.<br/>__*Default*__: "docs"
**edgeLambdaAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**entrypointTypes**?🔹 | <code>string</code> | The .d.ts file that includes the type declarations for this module.<br/>__*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
**eslint**?🔹 | <code>boolean</code> | Setup eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**experimentalIntegRunner**?🔹 | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner.<br/>__*Default*__: false
**featureFlags**?🔹 | <code>boolean</code> | Include all feature flags in cdk.json.<br/>__*Default*__: true
**gitIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .gitignore file.<br/>__*Optional*__
**gitOptions**?🔹 | <code>[GitOptions](#projen-gitoptions)</code> | Configuration options for git.<br/>__*Optional*__
**github**?🔹 | <code>boolean</code> | Enable GitHub integration.<br/>__*Default*__: true
**githubOptions**?🔹 | <code>[github.GitHubOptions](#projen-github-githuboptions)</code> | Options for GitHub integration.<br/>__*Default*__: see GitHubOptions
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**integrationTestAutoDiscover**?🔹 | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.<br/>__*Default*__: true
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[javascript.JestOptions](#projen-javascript-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**lambdaAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**lambdaExtensionAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**lambdaOptions**?🔹 | <code>[awscdk.LambdaFunctionCommonOptions](#projen-awscdk-lambdafunctioncommonoptions)</code> | Common options for all AWS Lambda functions.<br/>__*Default*__: default options
**libdir**?🔹 | <code>string</code> | Typescript  artifacts output directory.<br/>__*Default*__: "lib"
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**majorVersion**?🔹 | <code>number</code> | Major version to release from the default branch.<br/>__*Default*__: Major version is not enforced.
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?⚠️ | <code>boolean</code> | Whether mergify should be enabled on this repository or not.<br/>__*Default*__: true
**mergifyOptions**?⚠️ | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minMajorVersion**?🔹 | <code>number</code> | Minimal Major version to release.<br/>__*Default*__: No minimum version is being enforced
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?⚠️ | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | The npmDistTag to use when publishing from the default branch.<br/>__*Default*__: "latest"
**npmIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .npmignore file.<br/>__*Optional*__
**npmProvenance**?🔹 | <code>boolean</code> | Should provenance statements be generated when the package is published.<br/>__*Default*__: true for public packages, false otherwise
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?⚠️ | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**package**?🔹 | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).<br/>__*Default*__: true
**packageManager**?🔹 | <code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN_CLASSIC
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**pnpmVersion**?🔹 | <code>string</code> | The version of PNPM to use if using PNPM as a package manager.<br/>__*Default*__: "7"
**postBuildSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Steps to execute after build as part of the release workflow.<br/>__*Default*__: []
**prerelease**?🔹 | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").<br/>__*Default*__: normal semantic versions
**prettier**?🔹 | <code>boolean</code> | Setup prettier.<br/>__*Default*__: false
**prettierOptions**?🔹 | <code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code> | Prettier options.<br/>__*Default*__: default options
**projectType**?⚠️ | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenCredentials**?🔹 | <code>[github.GithubCredentials](#projen-github-githubcredentials)</code> | Choose a method of providing GitHub API access for projen workflows.<br/>__*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true if not a subproject
**projenTokenSecret**?⚠️ | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.<br/>__*Default*__: "PROJEN_GITHUB_TOKEN"
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**projenrcJs**?🔹 | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.<br/>__*Default*__: true if projenrcJson is false
**projenrcJsOptions**?🔹 | <code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code> | Options for .projenrc.js.<br/>__*Default*__: default options
**projenrcJson**?🔹 | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.<br/>__*Default*__: false
**projenrcJsonOptions**?🔹 | <code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code> | Options for .projenrc.json.<br/>__*Default*__: default options
**projenrcTs**?🔹 | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`).<br/>__*Default*__: false
**projenrcTsOptions**?🔹 | <code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code> | Options for .projenrc.ts.<br/>__*Optional*__
**publishDryRun**?🔹 | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command.<br/>__*Default*__: false
**publishTasks**?🔹 | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows.<br/>__*Default*__: false
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>Array<string></code> | The contents of the pull request template.<br/>__*Default*__: default content
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releasableCommits**?🔹 | <code>[ReleasableCommits](#projen-releasablecommits)</code> | Find commits that should be considered releasable Used to decide if a release is required.<br/>__*Default*__: ReleasableCommits.everyCommit()
**release**?🔹 | <code>boolean</code> | Add release management to this project.<br/>__*Default*__: true (false for subprojects)
**releaseBranches**?🔹 | <code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code> | Defines additional release branches.<br/>__*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
**releaseEveryCommit**?⚠️ | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseFailureIssue**?🔹 | <code>boolean</code> | Create a github issue on every failed publishing task.<br/>__*Default*__: false
**releaseFailureIssueLabel**?🔹 | <code>string</code> | The label to apply to issues indicating publish failures.<br/>__*Default*__: "failed-release"
**releaseSchedule**?⚠️ | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseTagPrefix**?🔹 | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.<br/>__*Default*__: "v"
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseTrigger**?🔹 | <code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code> | The release trigger to use.<br/>__*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
**releaseWorkflow**?⚠️ | <code>boolean</code> | DEPRECATED: renamed to `release`.<br/>__*Default*__: true if not a subproject
**releaseWorkflowName**?🔹 | <code>string</code> | The name of the default release workflow.<br/>__*Default*__: "release"
**releaseWorkflowSetupSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**renovatebot**?🔹 | <code>boolean</code> | Use renovatebot to handle dependency upgrades.<br/>__*Default*__: false
**renovatebotOptions**?🔹 | <code>[RenovatebotOptions](#projen-renovatebotoptions)</code> | Options for renovatebot.<br/>__*Default*__: default options
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**requireApproval**?🔹 | <code>[awscdk.ApprovalLevel](#projen-awscdk-approvallevel)</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.<br/>__*Default*__: ApprovalLevel.BROADENING
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scopedPackagesOptions**?🔹 | <code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code> | Options for privately hosted scoped packages.<br/>__*Default*__: fetch all scoped packages from the public npm registry
**scripts**?⚠️ | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**srcdir**?🔹 | <code>string</code> | Typescript sources directory.<br/>__*Default*__: "src"
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**stale**?🔹 | <code>boolean</code> | Auto-close of stale issues and pull request.<br/>__*Default*__: false
**staleOptions**?🔹 | <code>[github.StaleOptions](#projen-github-staleoptions)</code> | Auto-close stale issues and pull requests.<br/>__*Default*__: see defaults in `StaleOptions`
**testdir**?🔹 | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`.<br/>__*Default*__: "test"
**tsJestOptions**?🔹 | <code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code> | Options for ts-jest.<br/>__*Optional*__
**tsconfig**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom TSConfig.<br/>__*Default*__: default options
**tsconfigDev**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom tsconfig options for the development tsconfig.json file (used for testing).<br/>__*Default*__: use the production tsconfig options
**tsconfigDevFile**?🔹 | <code>string</code> | The name of the development tsconfig.json file.<br/>__*Default*__: "tsconfig.dev.json"
**typescriptVersion**?🔹 | <code>string</code> | TypeScript version to use.<br/>__*Default*__: "latest"
**versionrcOptions**?🔹 | <code>Map<string, any></code> | Custom configuration used when creating changelog with standard-version package.<br/>__*Default*__: standard configuration applicable for GitHub repositories
**vscode**?🔹 | <code>boolean</code> | Enable VSCode integration.<br/>__*Default*__: true
**watchExcludes**?🔹 | <code>Array<string></code> | Glob patterns to exclude from `cdk watch`.<br/>__*Default*__: []
**watchIncludes**?🔹 | <code>Array<string></code> | Glob patterns to include in `cdk watch`.<br/>__*Default*__: []
**workflowBootstrapSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowGitIdentity**?🔹 | <code>[github.GitIdentity](#projen-github-gitidentity)</code> | The git identity to use in workflows.<br/>__*Default*__: GitHub Actions
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`
**workflowPackageCache**?🔹 | <code>boolean</code> | Enable Node.js package cache in GitHub workflows.<br/>__*Default*__: false
**workflowRunsOn**?🔹 | <code>Array<string></code> | Github Runner selection labels.<br/>__*Default*__: ["ubuntu-latest"]
**workflowRunsOnGroup**?🔹 | <code>[GroupRunnerOptions](#projen-grouprunneroptions)</code> | Github Runner Group selection options.<br/>__*Optional*__
**yarnBerryOptions**?🔹 | <code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code> | Options for Yarn Berry.<br/>__*Default*__: Yarn Berry v4 with all default options



## struct TaimosCdkConstructLibraryOptions  <a id="taimos-projen-taimoscdkconstructlibraryoptions"></a>






Name | Type | Description 
-----|------|-------------
**author**🔹 | <code>string</code> | The name of the library author.
**authorAddress**🔹 | <code>string</code> | Email or URL of the library author.
**cdkVersion**🔹 | <code>string</code> | Minimum version of the AWS CDK to depend on.
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**repositoryUrl**🔹 | <code>string</code> | Git repository URL.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain build artifacts.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Is the author an organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoApproveOptions**?🔹 | <code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code> | Enable and configure the 'auto approve' workflow.<br/>__*Default*__: auto approve is disabled
**autoApproveUpgrades**?🔹 | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).<br/>__*Default*__: true
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**autoMerge**?🔹 | <code>boolean</code> | Enable automatic merging on GitHub.<br/>__*Default*__: true
**autoMergeOptions**?🔹 | <code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code> | Configure options for automatic merging on GitHub.<br/>__*Default*__: see defaults in `AutoMergeOptions`
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**bugsEmail**?🔹 | <code>string</code> | The email address to which issues should be reported.<br/>__*Optional*__
**bugsUrl**?🔹 | <code>string</code> | The url to your project's issue tracker.<br/>__*Optional*__
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**buildWorkflowOptions**?🔹 | <code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code> | Options for PR build workflow.<br/>__*Optional*__
**buildWorkflowTriggers**?⚠️ | <code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code> | Build workflow triggers.<br/>__*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**bundlerOptions**?🔹 | <code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code> | Options for `Bundler`.<br/>__*Optional*__
**catalog**?🔹 | <code>[cdk.Catalog](#projen-cdk-catalog)</code> | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.<br/>__*Default*__: new version will be announced
**cdkAssert**?⚠️ | <code>boolean</code> | Warning: NodeJS only.<br/>__*Default*__: will be included by default for AWS CDK >= 1.0.0 < 2.0.0
**cdkAssertions**?🔹 | <code>boolean</code> | Install the assertions library?<br/>__*Default*__: will be included by default for AWS CDK >= 1.111.0 < 2.0.0
**cdkDependencies**?⚠️ | <code>Array<string></code> | Which AWS CDKv1 modules this project requires.<br/>__*Optional*__
**cdkDependenciesAsDeps**?⚠️ | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).<br/>__*Default*__: true
**cdkTestDependencies**?⚠️ | <code>Array<string></code> | AWS CDK modules required for testing.<br/>__*Optional*__
**cdkVersionPinning**?🔹 | <code>boolean</code> | Use pinned version instead of caret version for CDK.<br/>__*Optional*__
**checkLicenses**?🔹 | <code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code> | Configure which licenses should be deemed acceptable for use by dependencies.<br/>__*Default*__: no license checks are run during the build and all licenses will be accepted
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true, but false for subprojects
**codeArtifactOptions**?🔹 | <code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code> | Options for npm packages using AWS CodeArtifact.<br/>__*Default*__: undefined
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**commitGenerated**?🔹 | <code>boolean</code> | Whether to commit the managed files by default.<br/>__*Default*__: true
**compat**?🔹 | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation.<br/>__*Default*__: false
**compatIgnore**?🔹 | <code>string</code> | Name of the ignore file for API compatibility tests.<br/>__*Default*__: ".compatignore"
**compressAssembly**?🔹 | <code>boolean</code> | Emit a compressed version of the assembly.<br/>__*Default*__: false
**constructsVersion**?🔹 | <code>string</code> | Minimum version of the `constructs` library to depend on.<br/>__*Default*__: for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Use dependabot to handle dependency upgrades.<br/>__*Default*__: false
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**depsUpgrade**?🔹 | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades.<br/>__*Default*__: true
**depsUpgradeOptions**?🔹 | <code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code> | Options for `UpgradeDependencies`.<br/>__*Default*__: default options
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**disableTsconfig**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).<br/>__*Default*__: false
**disableTsconfigDev**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file.<br/>__*Default*__: false
**docgen**?🔹 | <code>boolean</code> | Docgen by Typedoc.<br/>__*Default*__: false
**docgenFilePath**?🔹 | <code>string</code> | File path for generated docs.<br/>__*Default*__: "API.md"
**docsDirectory**?🔹 | <code>string</code> | Docs directory.<br/>__*Default*__: "docs"
**dotnet**?⚠️ | <code>[cdk.JsiiDotNetTarget](#projen-cdk-jsiidotnettarget)</code> | __*Optional*__
**edgeLambdaAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**entrypointTypes**?🔹 | <code>string</code> | The .d.ts file that includes the type declarations for this module.<br/>__*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
**eslint**?🔹 | <code>boolean</code> | Setup eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**excludeTypescript**?🔹 | <code>Array<string></code> | Accepts a list of glob patterns.<br/>__*Optional*__
**experimentalIntegRunner**?🔹 | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner.<br/>__*Default*__: false
**gitIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .gitignore file.<br/>__*Optional*__
**gitOptions**?🔹 | <code>[GitOptions](#projen-gitoptions)</code> | Configuration options for git.<br/>__*Optional*__
**github**?🔹 | <code>boolean</code> | Enable GitHub integration.<br/>__*Default*__: true
**githubOptions**?🔹 | <code>[github.GitHubOptions](#projen-github-githuboptions)</code> | Options for GitHub integration.<br/>__*Default*__: see GitHubOptions
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**integrationTestAutoDiscover**?🔹 | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory.<br/>__*Default*__: true
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[javascript.JestOptions](#projen-javascript-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**jsiiVersion**?🔹 | <code>string</code> | Version of the jsii compiler to use.<br/>__*Default*__: "1.x"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**lambdaAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler.<br/>__*Default*__: true
**lambdaExtensionAutoDiscover**?🔹 | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.<br/>__*Default*__: true
**lambdaOptions**?🔹 | <code>[awscdk.LambdaFunctionCommonOptions](#projen-awscdk-lambdafunctioncommonoptions)</code> | Common options for all AWS Lambda functions.<br/>__*Default*__: default options
**libdir**?🔹 | <code>string</code> | Typescript  artifacts output directory.<br/>__*Default*__: "lib"
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**majorVersion**?🔹 | <code>number</code> | Major version to release from the default branch.<br/>__*Default*__: Major version is not enforced.
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?⚠️ | <code>boolean</code> | Whether mergify should be enabled on this repository or not.<br/>__*Default*__: true
**mergifyOptions**?⚠️ | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minMajorVersion**?🔹 | <code>number</code> | Minimal Major version to release.<br/>__*Default*__: No minimum version is being enforced
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?⚠️ | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | The npmDistTag to use when publishing from the default branch.<br/>__*Default*__: "latest"
**npmIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .npmignore file.<br/>__*Optional*__
**npmProvenance**?🔹 | <code>boolean</code> | Should provenance statements be generated when the package is published.<br/>__*Default*__: true for public packages, false otherwise
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?⚠️ | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**package**?🔹 | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).<br/>__*Default*__: true
**packageManager**?🔹 | <code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN_CLASSIC
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**pnpmVersion**?🔹 | <code>string</code> | The version of PNPM to use if using PNPM as a package manager.<br/>__*Default*__: "7"
**postBuildSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Steps to execute after build as part of the release workflow.<br/>__*Default*__: []
**prerelease**?🔹 | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").<br/>__*Default*__: normal semantic versions
**prettier**?🔹 | <code>boolean</code> | Setup prettier.<br/>__*Default*__: false
**prettierOptions**?🔹 | <code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code> | Prettier options.<br/>__*Default*__: default options
**projectType**?⚠️ | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenCredentials**?🔹 | <code>[github.GithubCredentials](#projen-github-githubcredentials)</code> | Choose a method of providing GitHub API access for projen workflows.<br/>__*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true if not a subproject
**projenTokenSecret**?⚠️ | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.<br/>__*Default*__: "PROJEN_GITHUB_TOKEN"
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**projenrcJs**?🔹 | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.<br/>__*Default*__: true if projenrcJson is false
**projenrcJsOptions**?🔹 | <code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code> | Options for .projenrc.js.<br/>__*Default*__: default options
**projenrcJson**?🔹 | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.<br/>__*Default*__: false
**projenrcJsonOptions**?🔹 | <code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code> | Options for .projenrc.json.<br/>__*Default*__: default options
**projenrcTs**?🔹 | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`).<br/>__*Default*__: false
**projenrcTsOptions**?🔹 | <code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code> | Options for .projenrc.ts.<br/>__*Optional*__
**publishDryRun**?🔹 | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command.<br/>__*Default*__: false
**publishTasks**?🔹 | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows.<br/>__*Default*__: false
**publishToGo**?🔹 | <code>[cdk.JsiiGoTarget](#projen-cdk-jsiigotarget)</code> | Publish Go bindings to a git repository.<br/>__*Default*__: no publishing
**publishToMaven**?🔹 | <code>[cdk.JsiiJavaTarget](#projen-cdk-jsiijavatarget)</code> | Publish to maven.<br/>__*Default*__: no publishing
**publishToNuget**?🔹 | <code>[cdk.JsiiDotNetTarget](#projen-cdk-jsiidotnettarget)</code> | Publish to NuGet.<br/>__*Default*__: no publishing
**publishToPypi**?🔹 | <code>[cdk.JsiiPythonTarget](#projen-cdk-jsiipythontarget)</code> | Publish to pypi.<br/>__*Default*__: no publishing
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>Array<string></code> | The contents of the pull request template.<br/>__*Default*__: default content
**python**?⚠️ | <code>[cdk.JsiiPythonTarget](#projen-cdk-jsiipythontarget)</code> | __*Optional*__
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releasableCommits**?🔹 | <code>[ReleasableCommits](#projen-releasablecommits)</code> | Find commits that should be considered releasable Used to decide if a release is required.<br/>__*Default*__: ReleasableCommits.everyCommit()
**release**?🔹 | <code>boolean</code> | Add release management to this project.<br/>__*Default*__: true (false for subprojects)
**releaseBranches**?🔹 | <code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code> | Defines additional release branches.<br/>__*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
**releaseEveryCommit**?⚠️ | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseFailureIssue**?🔹 | <code>boolean</code> | Create a github issue on every failed publishing task.<br/>__*Default*__: false
**releaseFailureIssueLabel**?🔹 | <code>string</code> | The label to apply to issues indicating publish failures.<br/>__*Default*__: "failed-release"
**releaseSchedule**?⚠️ | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseTagPrefix**?🔹 | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.<br/>__*Default*__: "v"
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseTrigger**?🔹 | <code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code> | The release trigger to use.<br/>__*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
**releaseWorkflow**?⚠️ | <code>boolean</code> | DEPRECATED: renamed to `release`.<br/>__*Default*__: true if not a subproject
**releaseWorkflowName**?🔹 | <code>string</code> | The name of the default release workflow.<br/>__*Default*__: "release"
**releaseWorkflowSetupSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**renovatebot**?🔹 | <code>boolean</code> | Use renovatebot to handle dependency upgrades.<br/>__*Default*__: false
**renovatebotOptions**?🔹 | <code>[RenovatebotOptions](#projen-renovatebotoptions)</code> | Options for renovatebot.<br/>__*Default*__: default options
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**rootdir**?🔹 | <code>string</code> | __*Default*__: "."
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scopedPackagesOptions**?🔹 | <code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code> | Options for privately hosted scoped packages.<br/>__*Default*__: fetch all scoped packages from the public npm registry
**scripts**?⚠️ | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**srcdir**?🔹 | <code>string</code> | Typescript sources directory.<br/>__*Default*__: "src"
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**stale**?🔹 | <code>boolean</code> | Auto-close of stale issues and pull request.<br/>__*Default*__: false
**staleOptions**?🔹 | <code>[github.StaleOptions](#projen-github-staleoptions)</code> | Auto-close stale issues and pull requests.<br/>__*Default*__: see defaults in `StaleOptions`
**testdir**?🔹 | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`.<br/>__*Default*__: "test"
**tsJestOptions**?🔹 | <code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code> | Options for ts-jest.<br/>__*Optional*__
**tsconfig**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom TSConfig.<br/>__*Default*__: default options
**tsconfigDev**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom tsconfig options for the development tsconfig.json file (used for testing).<br/>__*Default*__: use the production tsconfig options
**tsconfigDevFile**?🔹 | <code>string</code> | The name of the development tsconfig.json file.<br/>__*Default*__: "tsconfig.dev.json"
**typescriptVersion**?🔹 | <code>string</code> | TypeScript version to use.<br/>__*Default*__: "latest"
**versionrcOptions**?🔹 | <code>Map<string, any></code> | Custom configuration used when creating changelog with standard-version package.<br/>__*Default*__: standard configuration applicable for GitHub repositories
**vscode**?🔹 | <code>boolean</code> | Enable VSCode integration.<br/>__*Default*__: true
**workflowBootstrapSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowGitIdentity**?🔹 | <code>[github.GitIdentity](#projen-github-gitidentity)</code> | The git identity to use in workflows.<br/>__*Default*__: GitHub Actions
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`
**workflowPackageCache**?🔹 | <code>boolean</code> | Enable Node.js package cache in GitHub workflows.<br/>__*Default*__: false
**workflowRunsOn**?🔹 | <code>Array<string></code> | Github Runner selection labels.<br/>__*Default*__: ["ubuntu-latest"]
**workflowRunsOnGroup**?🔹 | <code>[GroupRunnerOptions](#projen-grouprunneroptions)</code> | Github Runner Group selection options.<br/>__*Optional*__
**yarnBerryOptions**?🔹 | <code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code> | Options for Yarn Berry.<br/>__*Default*__: Yarn Berry v4 with all default options



## struct TaimosPrivateTypescriptLibraryOptions  <a id="taimos-projen-taimosprivatetypescriptlibraryoptions"></a>






Name | Type | Description 
-----|------|-------------
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain build artifacts.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Is the author an organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoApproveOptions**?🔹 | <code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code> | Enable and configure the 'auto approve' workflow.<br/>__*Default*__: auto approve is disabled
**autoApproveUpgrades**?🔹 | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).<br/>__*Default*__: true
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**autoMerge**?🔹 | <code>boolean</code> | Enable automatic merging on GitHub.<br/>__*Default*__: true
**autoMergeOptions**?🔹 | <code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code> | Configure options for automatic merging on GitHub.<br/>__*Default*__: see defaults in `AutoMergeOptions`
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**bugsEmail**?🔹 | <code>string</code> | The email address to which issues should be reported.<br/>__*Optional*__
**bugsUrl**?🔹 | <code>string</code> | The url to your project's issue tracker.<br/>__*Optional*__
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**buildWorkflowOptions**?🔹 | <code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code> | Options for PR build workflow.<br/>__*Optional*__
**buildWorkflowTriggers**?⚠️ | <code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code> | Build workflow triggers.<br/>__*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**bundlerOptions**?🔹 | <code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code> | Options for `Bundler`.<br/>__*Optional*__
**checkLicenses**?🔹 | <code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code> | Configure which licenses should be deemed acceptable for use by dependencies.<br/>__*Default*__: no license checks are run during the build and all licenses will be accepted
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true, but false for subprojects
**codeArtifactOptions**?🔹 | <code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code> | Options for npm packages using AWS CodeArtifact.<br/>__*Default*__: undefined
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**commitGenerated**?🔹 | <code>boolean</code> | Whether to commit the managed files by default.<br/>__*Default*__: true
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Use dependabot to handle dependency upgrades.<br/>__*Default*__: false
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**depsUpgrade**?🔹 | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades.<br/>__*Default*__: true
**depsUpgradeOptions**?🔹 | <code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code> | Options for `UpgradeDependencies`.<br/>__*Default*__: default options
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**disableTsconfig**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).<br/>__*Default*__: false
**disableTsconfigDev**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file.<br/>__*Default*__: false
**docgen**?🔹 | <code>boolean</code> | Docgen by Typedoc.<br/>__*Default*__: false
**docsDirectory**?🔹 | <code>string</code> | Docs directory.<br/>__*Default*__: "docs"
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**entrypointTypes**?🔹 | <code>string</code> | The .d.ts file that includes the type declarations for this module.<br/>__*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
**eslint**?🔹 | <code>boolean</code> | Setup eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**gitIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .gitignore file.<br/>__*Optional*__
**gitOptions**?🔹 | <code>[GitOptions](#projen-gitoptions)</code> | Configuration options for git.<br/>__*Optional*__
**github**?🔹 | <code>boolean</code> | Enable GitHub integration.<br/>__*Default*__: true
**githubOptions**?🔹 | <code>[github.GitHubOptions](#projen-github-githuboptions)</code> | Options for GitHub integration.<br/>__*Default*__: see GitHubOptions
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[javascript.JestOptions](#projen-javascript-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**libdir**?🔹 | <code>string</code> | Typescript  artifacts output directory.<br/>__*Default*__: "lib"
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**majorVersion**?🔹 | <code>number</code> | Major version to release from the default branch.<br/>__*Default*__: Major version is not enforced.
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?⚠️ | <code>boolean</code> | Whether mergify should be enabled on this repository or not.<br/>__*Default*__: true
**mergifyOptions**?⚠️ | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minMajorVersion**?🔹 | <code>number</code> | Minimal Major version to release.<br/>__*Default*__: No minimum version is being enforced
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?⚠️ | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | The npmDistTag to use when publishing from the default branch.<br/>__*Default*__: "latest"
**npmIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .npmignore file.<br/>__*Optional*__
**npmProvenance**?🔹 | <code>boolean</code> | Should provenance statements be generated when the package is published.<br/>__*Default*__: true for public packages, false otherwise
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?⚠️ | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**package**?🔹 | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).<br/>__*Default*__: true
**packageManager**?🔹 | <code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN_CLASSIC
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**pnpmVersion**?🔹 | <code>string</code> | The version of PNPM to use if using PNPM as a package manager.<br/>__*Default*__: "7"
**postBuildSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Steps to execute after build as part of the release workflow.<br/>__*Default*__: []
**prerelease**?🔹 | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").<br/>__*Default*__: normal semantic versions
**prettier**?🔹 | <code>boolean</code> | Setup prettier.<br/>__*Default*__: false
**prettierOptions**?🔹 | <code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code> | Prettier options.<br/>__*Default*__: default options
**projectType**?⚠️ | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenCredentials**?🔹 | <code>[github.GithubCredentials](#projen-github-githubcredentials)</code> | Choose a method of providing GitHub API access for projen workflows.<br/>__*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true if not a subproject
**projenTokenSecret**?⚠️ | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.<br/>__*Default*__: "PROJEN_GITHUB_TOKEN"
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**projenrcJs**?🔹 | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.<br/>__*Default*__: true if projenrcJson is false
**projenrcJsOptions**?🔹 | <code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code> | Options for .projenrc.js.<br/>__*Default*__: default options
**projenrcJson**?🔹 | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.<br/>__*Default*__: false
**projenrcJsonOptions**?🔹 | <code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code> | Options for .projenrc.json.<br/>__*Default*__: default options
**projenrcTs**?🔹 | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`).<br/>__*Default*__: false
**projenrcTsOptions**?🔹 | <code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code> | Options for .projenrc.ts.<br/>__*Optional*__
**publishDryRun**?🔹 | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command.<br/>__*Default*__: false
**publishTasks**?🔹 | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows.<br/>__*Default*__: false
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>Array<string></code> | The contents of the pull request template.<br/>__*Default*__: default content
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releasableCommits**?🔹 | <code>[ReleasableCommits](#projen-releasablecommits)</code> | Find commits that should be considered releasable Used to decide if a release is required.<br/>__*Default*__: ReleasableCommits.everyCommit()
**release**?🔹 | <code>boolean</code> | Add release management to this project.<br/>__*Default*__: true (false for subprojects)
**releaseBranches**?🔹 | <code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code> | Defines additional release branches.<br/>__*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
**releaseEveryCommit**?⚠️ | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseFailureIssue**?🔹 | <code>boolean</code> | Create a github issue on every failed publishing task.<br/>__*Default*__: false
**releaseFailureIssueLabel**?🔹 | <code>string</code> | The label to apply to issues indicating publish failures.<br/>__*Default*__: "failed-release"
**releaseSchedule**?⚠️ | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseTagPrefix**?🔹 | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.<br/>__*Default*__: "v"
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseTrigger**?🔹 | <code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code> | The release trigger to use.<br/>__*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
**releaseWorkflow**?⚠️ | <code>boolean</code> | DEPRECATED: renamed to `release`.<br/>__*Default*__: true if not a subproject
**releaseWorkflowName**?🔹 | <code>string</code> | The name of the default release workflow.<br/>__*Default*__: "release"
**releaseWorkflowSetupSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**renovatebot**?🔹 | <code>boolean</code> | Use renovatebot to handle dependency upgrades.<br/>__*Default*__: false
**renovatebotOptions**?🔹 | <code>[RenovatebotOptions](#projen-renovatebotoptions)</code> | Options for renovatebot.<br/>__*Default*__: default options
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scopedPackagesOptions**?🔹 | <code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code> | Options for privately hosted scoped packages.<br/>__*Default*__: fetch all scoped packages from the public npm registry
**scripts**?⚠️ | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**srcdir**?🔹 | <code>string</code> | Typescript sources directory.<br/>__*Default*__: "src"
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**stale**?🔹 | <code>boolean</code> | Auto-close of stale issues and pull request.<br/>__*Default*__: false
**staleOptions**?🔹 | <code>[github.StaleOptions](#projen-github-staleoptions)</code> | Auto-close stale issues and pull requests.<br/>__*Default*__: see defaults in `StaleOptions`
**testdir**?🔹 | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`.<br/>__*Default*__: "test"
**tsJestOptions**?🔹 | <code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code> | Options for ts-jest.<br/>__*Optional*__
**tsconfig**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom TSConfig.<br/>__*Default*__: default options
**tsconfigDev**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom tsconfig options for the development tsconfig.json file (used for testing).<br/>__*Default*__: use the production tsconfig options
**tsconfigDevFile**?🔹 | <code>string</code> | The name of the development tsconfig.json file.<br/>__*Default*__: "tsconfig.dev.json"
**typescriptVersion**?🔹 | <code>string</code> | TypeScript version to use.<br/>__*Default*__: "latest"
**versionrcOptions**?🔹 | <code>Map<string, any></code> | Custom configuration used when creating changelog with standard-version package.<br/>__*Default*__: standard configuration applicable for GitHub repositories
**vscode**?🔹 | <code>boolean</code> | Enable VSCode integration.<br/>__*Default*__: true
**workflowBootstrapSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowGitIdentity**?🔹 | <code>[github.GitIdentity](#projen-github-gitidentity)</code> | The git identity to use in workflows.<br/>__*Default*__: GitHub Actions
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`
**workflowPackageCache**?🔹 | <code>boolean</code> | Enable Node.js package cache in GitHub workflows.<br/>__*Default*__: false
**workflowRunsOn**?🔹 | <code>Array<string></code> | Github Runner selection labels.<br/>__*Default*__: ["ubuntu-latest"]
**workflowRunsOnGroup**?🔹 | <code>[GroupRunnerOptions](#projen-grouprunneroptions)</code> | Github Runner Group selection options.<br/>__*Optional*__
**yarnBerryOptions**?🔹 | <code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code> | Options for Yarn Berry.<br/>__*Default*__: Yarn Berry v4 with all default options



## struct TaimosTypescriptLibraryOptions  <a id="taimos-projen-taimostypescriptlibraryoptions"></a>






Name | Type | Description 
-----|------|-------------
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain build artifacts.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Is the author an organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoApproveOptions**?🔹 | <code>[github.AutoApproveOptions](#projen-github-autoapproveoptions)</code> | Enable and configure the 'auto approve' workflow.<br/>__*Default*__: auto approve is disabled
**autoApproveUpgrades**?🔹 | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).<br/>__*Default*__: true
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**autoMerge**?🔹 | <code>boolean</code> | Enable automatic merging on GitHub.<br/>__*Default*__: true
**autoMergeOptions**?🔹 | <code>[github.AutoMergeOptions](#projen-github-automergeoptions)</code> | Configure options for automatic merging on GitHub.<br/>__*Default*__: see defaults in `AutoMergeOptions`
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**bugsEmail**?🔹 | <code>string</code> | The email address to which issues should be reported.<br/>__*Optional*__
**bugsUrl**?🔹 | <code>string</code> | The url to your project's issue tracker.<br/>__*Optional*__
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**buildWorkflowOptions**?🔹 | <code>[javascript.BuildWorkflowOptions](#projen-javascript-buildworkflowoptions)</code> | Options for PR build workflow.<br/>__*Optional*__
**buildWorkflowTriggers**?⚠️ | <code>[github.workflows.Triggers](#projen-github-workflows-triggers)</code> | Build workflow triggers.<br/>__*Default*__: "{ pullRequest: {}, workflowDispatch: {} }"
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**bundlerOptions**?🔹 | <code>[javascript.BundlerOptions](#projen-javascript-bundleroptions)</code> | Options for `Bundler`.<br/>__*Optional*__
**checkLicenses**?🔹 | <code>[javascript.LicenseCheckerOptions](#projen-javascript-licensecheckeroptions)</code> | Configure which licenses should be deemed acceptable for use by dependencies.<br/>__*Default*__: no license checks are run during the build and all licenses will be accepted
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true, but false for subprojects
**codeArtifactOptions**?🔹 | <code>[javascript.CodeArtifactOptions](#projen-javascript-codeartifactoptions)</code> | Options for npm packages using AWS CodeArtifact.<br/>__*Default*__: undefined
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**commitGenerated**?🔹 | <code>boolean</code> | Whether to commit the managed files by default.<br/>__*Default*__: true
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Use dependabot to handle dependency upgrades.<br/>__*Default*__: false
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**depsUpgrade**?🔹 | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades.<br/>__*Default*__: true
**depsUpgradeOptions**?🔹 | <code>[javascript.UpgradeDependenciesOptions](#projen-javascript-upgradedependenciesoptions)</code> | Options for `UpgradeDependencies`.<br/>__*Default*__: default options
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**disableTsconfig**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).<br/>__*Default*__: false
**disableTsconfigDev**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file.<br/>__*Default*__: false
**docgen**?🔹 | <code>boolean</code> | Docgen by Typedoc.<br/>__*Default*__: false
**docsDirectory**?🔹 | <code>string</code> | Docs directory.<br/>__*Default*__: "docs"
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**entrypointTypes**?🔹 | <code>string</code> | The .d.ts file that includes the type declarations for this module.<br/>__*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
**eslint**?🔹 | <code>boolean</code> | Setup eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[javascript.EslintOptions](#projen-javascript-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**gitIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .gitignore file.<br/>__*Optional*__
**gitOptions**?🔹 | <code>[GitOptions](#projen-gitoptions)</code> | Configuration options for git.<br/>__*Optional*__
**github**?🔹 | <code>boolean</code> | Enable GitHub integration.<br/>__*Default*__: true
**githubOptions**?🔹 | <code>[github.GitHubOptions](#projen-github-githuboptions)</code> | Options for GitHub integration.<br/>__*Default*__: see GitHubOptions
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[javascript.JestOptions](#projen-javascript-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**libdir**?🔹 | <code>string</code> | Typescript  artifacts output directory.<br/>__*Default*__: "lib"
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**majorVersion**?🔹 | <code>number</code> | Major version to release from the default branch.<br/>__*Default*__: Major version is not enforced.
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?⚠️ | <code>boolean</code> | Whether mergify should be enabled on this repository or not.<br/>__*Default*__: true
**mergifyOptions**?⚠️ | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minMajorVersion**?🔹 | <code>number</code> | Minimal Major version to release.<br/>__*Default*__: No minimum version is being enforced
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?⚠️ | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[javascript.NpmAccess](#projen-javascript-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | The npmDistTag to use when publishing from the default branch.<br/>__*Default*__: "latest"
**npmIgnoreOptions**?🔹 | <code>[IgnoreFileOptions](#projen-ignorefileoptions)</code> | Configuration options for .npmignore file.<br/>__*Optional*__
**npmProvenance**?🔹 | <code>boolean</code> | Should provenance statements be generated when the package is published.<br/>__*Default*__: true for public packages, false otherwise
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?⚠️ | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**package**?🔹 | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).<br/>__*Default*__: true
**packageManager**?🔹 | <code>[javascript.NodePackageManager](#projen-javascript-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN_CLASSIC
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[javascript.PeerDependencyOptions](#projen-javascript-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**pnpmVersion**?🔹 | <code>string</code> | The version of PNPM to use if using PNPM as a package manager.<br/>__*Default*__: "7"
**postBuildSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Steps to execute after build as part of the release workflow.<br/>__*Default*__: []
**prerelease**?🔹 | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").<br/>__*Default*__: normal semantic versions
**prettier**?🔹 | <code>boolean</code> | Setup prettier.<br/>__*Default*__: false
**prettierOptions**?🔹 | <code>[javascript.PrettierOptions](#projen-javascript-prettieroptions)</code> | Prettier options.<br/>__*Default*__: default options
**projectType**?⚠️ | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenCredentials**?🔹 | <code>[github.GithubCredentials](#projen-github-githubcredentials)</code> | Choose a method of providing GitHub API access for projen workflows.<br/>__*Default*__: use a personal access token named PROJEN_GITHUB_TOKEN
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true if not a subproject
**projenTokenSecret**?⚠️ | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.<br/>__*Default*__: "PROJEN_GITHUB_TOKEN"
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**projenrcJs**?🔹 | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.<br/>__*Default*__: true if projenrcJson is false
**projenrcJsOptions**?🔹 | <code>[javascript.ProjenrcOptions](#projen-javascript-projenrcoptions)</code> | Options for .projenrc.js.<br/>__*Default*__: default options
**projenrcJson**?🔹 | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.<br/>__*Default*__: false
**projenrcJsonOptions**?🔹 | <code>[ProjenrcJsonOptions](#projen-projenrcjsonoptions)</code> | Options for .projenrc.json.<br/>__*Default*__: default options
**projenrcTs**?🔹 | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`).<br/>__*Default*__: false
**projenrcTsOptions**?🔹 | <code>[typescript.ProjenrcOptions](#projen-typescript-projenrcoptions)</code> | Options for .projenrc.ts.<br/>__*Optional*__
**publishDryRun**?🔹 | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command.<br/>__*Default*__: false
**publishTasks**?🔹 | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows.<br/>__*Default*__: false
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>Array<string></code> | The contents of the pull request template.<br/>__*Default*__: default content
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releasableCommits**?🔹 | <code>[ReleasableCommits](#projen-releasablecommits)</code> | Find commits that should be considered releasable Used to decide if a release is required.<br/>__*Default*__: ReleasableCommits.everyCommit()
**release**?🔹 | <code>boolean</code> | Add release management to this project.<br/>__*Default*__: true (false for subprojects)
**releaseBranches**?🔹 | <code>Map<string, [release.BranchOptions](#projen-release-branchoptions)></code> | Defines additional release branches.<br/>__*Default*__: no additional branches are used for release. you can use `addBranch()` to add additional branches.
**releaseEveryCommit**?⚠️ | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseFailureIssue**?🔹 | <code>boolean</code> | Create a github issue on every failed publishing task.<br/>__*Default*__: false
**releaseFailureIssueLabel**?🔹 | <code>string</code> | The label to apply to issues indicating publish failures.<br/>__*Default*__: "failed-release"
**releaseSchedule**?⚠️ | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseTagPrefix**?🔹 | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.<br/>__*Default*__: "v"
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseTrigger**?🔹 | <code>[release.ReleaseTrigger](#projen-release-releasetrigger)</code> | The release trigger to use.<br/>__*Default*__: Continuous releases (`ReleaseTrigger.continuous()`)
**releaseWorkflow**?⚠️ | <code>boolean</code> | DEPRECATED: renamed to `release`.<br/>__*Default*__: true if not a subproject
**releaseWorkflowName**?🔹 | <code>string</code> | The name of the default release workflow.<br/>__*Default*__: "release"
**releaseWorkflowSetupSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**renovatebot**?🔹 | <code>boolean</code> | Use renovatebot to handle dependency upgrades.<br/>__*Default*__: false
**renovatebotOptions**?🔹 | <code>[RenovatebotOptions](#projen-renovatebotoptions)</code> | Options for renovatebot.<br/>__*Default*__: default options
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scopedPackagesOptions**?🔹 | <code>Array<[javascript.ScopedPackagesOptions](#projen-javascript-scopedpackagesoptions)></code> | Options for privately hosted scoped packages.<br/>__*Default*__: fetch all scoped packages from the public npm registry
**scripts**?⚠️ | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**srcdir**?🔹 | <code>string</code> | Typescript sources directory.<br/>__*Default*__: "src"
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**stale**?🔹 | <code>boolean</code> | Auto-close of stale issues and pull request.<br/>__*Default*__: false
**staleOptions**?🔹 | <code>[github.StaleOptions](#projen-github-staleoptions)</code> | Auto-close stale issues and pull requests.<br/>__*Default*__: see defaults in `StaleOptions`
**testdir**?🔹 | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`.<br/>__*Default*__: "test"
**tsJestOptions**?🔹 | <code>[typescript.TsJestOptions](#projen-typescript-tsjestoptions)</code> | Options for ts-jest.<br/>__*Optional*__
**tsconfig**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom TSConfig.<br/>__*Default*__: default options
**tsconfigDev**?🔹 | <code>[javascript.TypescriptConfigOptions](#projen-javascript-typescriptconfigoptions)</code> | Custom tsconfig options for the development tsconfig.json file (used for testing).<br/>__*Default*__: use the production tsconfig options
**tsconfigDevFile**?🔹 | <code>string</code> | The name of the development tsconfig.json file.<br/>__*Default*__: "tsconfig.dev.json"
**typescriptVersion**?🔹 | <code>string</code> | TypeScript version to use.<br/>__*Default*__: "latest"
**versionrcOptions**?🔹 | <code>Map<string, any></code> | Custom configuration used when creating changelog with standard-version package.<br/>__*Default*__: standard configuration applicable for GitHub repositories
**vscode**?🔹 | <code>boolean</code> | Enable VSCode integration.<br/>__*Default*__: true
**workflowBootstrapSteps**?🔹 | <code>Array<[github.workflows.JobStep](#projen-github-workflows-jobstep)></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowGitIdentity**?🔹 | <code>[github.GitIdentity](#projen-github-gitidentity)</code> | The git identity to use in workflows.<br/>__*Default*__: GitHub Actions
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`
**workflowPackageCache**?🔹 | <code>boolean</code> | Enable Node.js package cache in GitHub workflows.<br/>__*Default*__: false
**workflowRunsOn**?🔹 | <code>Array<string></code> | Github Runner selection labels.<br/>__*Default*__: ["ubuntu-latest"]
**workflowRunsOnGroup**?🔹 | <code>[GroupRunnerOptions](#projen-grouprunneroptions)</code> | Github Runner Group selection options.<br/>__*Optional*__
**yarnBerryOptions**?🔹 | <code>[javascript.YarnBerryOptions](#projen-javascript-yarnberryoptions)</code> | Options for Yarn Berry.<br/>__*Default*__: Yarn Berry v4 with all default options



