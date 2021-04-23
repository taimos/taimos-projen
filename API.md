# API Reference

**Classes**

Name|Description
----|-----------
[CdkPipelineAspect](#taimos-projen-cdkpipelineaspect)|*No description*
[SopsAspect](#taimos-projen-sopsaspect)|*No description*
[TaimosCdkApp](#taimos-projen-taimoscdkapp)|AWS CDK app in TypeScript.
[TaimosCdkConstructLibrary](#taimos-projen-taimoscdkconstructlibrary)|TypeScript library.
[TaimosTypescriptLibrary](#taimos-projen-taimostypescriptlibrary)|TypeScript library.


**Structs**

Name|Description
----|-----------
[TaimosCdkAppOptions](#taimos-projen-taimoscdkappoptions)|*No description*
[TaimosCdkConstructLibraryOptions](#taimos-projen-taimoscdkconstructlibraryoptions)|*No description*
[TaimosTypescriptLibraryOptions](#taimos-projen-taimostypescriptlibraryoptions)|*No description*



## class CdkPipelineAspect 🔹 <a id="taimos-projen-cdkpipelineaspect"></a>



__Extends__: [Component](#projen-component)

### Initializer




```ts
new CdkPipelineAspect(app: TaimosCdkApp)
```

* **app** (<code>[TaimosCdkApp](#taimos-projen-taimoscdkapp)</code>)  *No description*




## class SopsAspect 🔹 <a id="taimos-projen-sopsaspect"></a>



__Extends__: [Component](#projen-component)

### Initializer




```ts
new SopsAspect(app: AwsCdkTypeScriptApp)
```

* **app** (<code>[AwsCdkTypeScriptApp](#projen-awscdktypescriptapp)</code>)  *No description*


### Methods


#### *static* readSopsConfig()🔹 <a id="taimos-projen-sopsaspect-readsopsconfig"></a>



```ts
static readSopsConfig(): any
```


__Returns__:
* <code>any</code>



## class TaimosCdkApp 🔹 <a id="taimos-projen-taimoscdkapp"></a>

AWS CDK app in TypeScript.

__Extends__: [AwsCdkTypeScriptApp](#projen-awscdktypescriptapp)

### Initializer




```ts
new TaimosCdkApp(options: TaimosCdkAppOptions)
```

* **options** (<code>[TaimosCdkAppOptions](#taimos-projen-taimoscdkappoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **jsiiFqn** (<code>string</code>)  The JSII FQN (fully qualified name) of the project class. __*Default*__: undefined
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Author's Organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
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
  * **npmAccess** (<code>[NpmAccess](#projen-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmDistTag** (<code>string</code>)  Tags can be used to provide an alias instead of version numbers. __*Default*__: "latest"
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTaskExecution** (<code>[NpmTaskExecution](#projen-npmtaskexecution)</code>)  Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz). __*Default*__: NpmTaskExecution.PROJEN
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[NodePackageManager](#projen-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **antitamper** (<code>boolean</code>)  Checks that after build there are no modified files on git. __*Default*__: true
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain artifacts to be published to npm. __*Default*__: "dist"
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Include dependabot configuration. __*Default*__: true
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[JestOptions](#projen-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `jsii-release` which is used to publish modules to npm. __*Default*__: "latest"
  * **mergify** (<code>boolean</code>)  Adds mergify configuration. __*Default*__: true
  * **mergifyAutoMergeLabel** (<code>string</code>)  Automatically merge PRs that build successfully and have this label. __*Default*__: "auto-merge"
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true
  * **projenDuringBuild** (<code>boolean</code>)  Execute `projen` as the first step of the `build` task to synthesize project files. __*Default*__: true
  * **projenUpgradeAutoMerge** (<code>boolean</code>)  Automatically merge projen upgrade PRs when build passes. __*Default*__: "true" if mergify auto-merge is enabled (default)
  * **projenUpgradeSchedule** (<code>Array<string></code>)  Customize the projenUpgrade schedule in cron expression. __*Default*__: [ "0 6 * * *" ]
  * **projenUpgradeSecret** (<code>string</code>)  Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). __*Default*__: no automatic projen upgrade pull requests
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>string</code>)  The contents of the pull request template. __*Default*__: default content
  * **releaseBranches** (<code>Array<string></code>)  Branches which trigger a release. __*Default*__: [ "main" ]
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  Define a GitHub workflow for releasing from "main" when new versions are bumped. __*Default*__: true if not a subproject
  * **releaseWorkflowSetupSteps** (<code>Array<any></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **workflowBootstrapSteps** (<code>Array<any></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **compileBeforeTest** (<code>boolean</code>)  Compile the code before running tests. __*Default*__: if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false.
  * **disableTsconfig** (<code>boolean</code>)  Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). __*Default*__: false
  * **docgen** (<code>boolean</code>)  Docgen by Typedoc. __*Default*__: false
  * **docsDirectory** (<code>string</code>)  Docs directory. __*Default*__: "docs"
  * **entrypointTypes** (<code>string</code>)  The .d.ts file that includes the type declarations for this module. __*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
  * **eslint** (<code>boolean</code>)  Setup eslint. __*Default*__: true
  * **eslintOptions** (<code>[EslintOptions](#projen-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **libdir** (<code>string</code>)  Typescript  artifacts output directory. __*Default*__: "lib"
  * **package** (<code>boolean</code>)  Defines a `yarn package` command that will produce a tarball and place it under `dist/js`. __*Default*__: true
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **srcdir** (<code>string</code>)  Typescript sources directory. __*Default*__: "src"
  * **testdir** (<code>string</code>)  Jest tests directory. Tests files should be named `xxx.test.ts`. __*Default*__: "test"
  * **tsconfig** (<code>[TypescriptConfigOptions](#projen-typescriptconfigoptions)</code>)  Custom TSConfig. __*Optional*__
  * **typescriptVersion** (<code>string</code>)  TypeScript version to use. __*Default*__: "latest"
  * **cdkVersion** (<code>string</code>)  AWS CDK version to use. 
  * **appEntrypoint** (<code>string</code>)  The CDK app's entrypoint (relative to the source directory, which is "src" by default). __*Default*__: "main.ts"
  * **cdkDependencies** (<code>Array<string></code>)  Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. __*Optional*__
  * **cdkVersionPinning** (<code>boolean</code>)  Use pinned version instead of caret version for CDK. __*Default*__: false
  * **context** (<code>Map<string, string></code>)  Additional context to include in `cdk.json`. __*Optional*__
  * **requireApproval** (<code>[CdkApprovalLevel](#projen-cdkapprovallevel)</code>)  To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. __*Default*__: CdkApprovalLevel.BROADENING
  * **cdkPipelines** (<code>boolean</code>)  Enable CDK pipelines. __*Default*__: false
  * **sops** (<code>boolean</code>)  Enable storing secrets using Mozilla SOPS in a file sops.json. __*Default*__: false




## class TaimosCdkConstructLibrary 🔹 <a id="taimos-projen-taimoscdkconstructlibrary"></a>

TypeScript library.

__Extends__: [AwsCdkConstructLibrary](#projen-awscdkconstructlibrary)

### Initializer




```ts
new TaimosCdkConstructLibrary(options: TaimosCdkConstructLibraryOptions)
```

* **options** (<code>[TaimosCdkConstructLibraryOptions](#taimos-projen-taimoscdkconstructlibraryoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **jsiiFqn** (<code>string</code>)  The JSII FQN (fully qualified name) of the project class. __*Default*__: undefined
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Author's Organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
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
  * **npmAccess** (<code>[NpmAccess](#projen-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmDistTag** (<code>string</code>)  Tags can be used to provide an alias instead of version numbers. __*Default*__: "latest"
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTaskExecution** (<code>[NpmTaskExecution](#projen-npmtaskexecution)</code>)  Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz). __*Default*__: NpmTaskExecution.PROJEN
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[NodePackageManager](#projen-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **antitamper** (<code>boolean</code>)  Checks that after build there are no modified files on git. __*Default*__: true
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain artifacts to be published to npm. __*Default*__: "dist"
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Include dependabot configuration. __*Default*__: true
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[JestOptions](#projen-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `jsii-release` which is used to publish modules to npm. __*Default*__: "latest"
  * **mergify** (<code>boolean</code>)  Adds mergify configuration. __*Default*__: true
  * **mergifyAutoMergeLabel** (<code>string</code>)  Automatically merge PRs that build successfully and have this label. __*Default*__: "auto-merge"
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true
  * **projenDuringBuild** (<code>boolean</code>)  Execute `projen` as the first step of the `build` task to synthesize project files. __*Default*__: true
  * **projenUpgradeAutoMerge** (<code>boolean</code>)  Automatically merge projen upgrade PRs when build passes. __*Default*__: "true" if mergify auto-merge is enabled (default)
  * **projenUpgradeSchedule** (<code>Array<string></code>)  Customize the projenUpgrade schedule in cron expression. __*Default*__: [ "0 6 * * *" ]
  * **projenUpgradeSecret** (<code>string</code>)  Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). __*Default*__: no automatic projen upgrade pull requests
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>string</code>)  The contents of the pull request template. __*Default*__: default content
  * **releaseBranches** (<code>Array<string></code>)  Branches which trigger a release. __*Default*__: [ "main" ]
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  Define a GitHub workflow for releasing from "main" when new versions are bumped. __*Default*__: true if not a subproject
  * **releaseWorkflowSetupSteps** (<code>Array<any></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **workflowBootstrapSteps** (<code>Array<any></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **author** (<code>string</code>)  The name of the library author. 
  * **authorAddress** (<code>string</code>)  Email or URL of the library author. 
  * **repositoryUrl** (<code>string</code>)  Git repository URL. 
  * **compat** (<code>boolean</code>)  Automatically run API compatibility test against the latest version published to npm after compilation. __*Default*__: false
  * **compatIgnore** (<code>string</code>)  Name of the ignore file for API compatibility tests. __*Default*__: ".compatignore"
  * **docgen** (<code>boolean</code>)  Automatically generate API.md from jsii. __*Default*__: true
  * **dotnet** (<code>[JsiiDotNetTarget](#projen-jsiidotnettarget)</code>)  *No description* __*Optional*__
  * **eslint** (<code>boolean</code>)  Install eslint. __*Default*__: true
  * **eslintOptions** (<code>[EslintOptions](#projen-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **excludeTypescript** (<code>Array<string></code>)  Accepts a list of glob patterns. __*Optional*__
  * **publishToGo** (<code>[JsiiGoTarget](#projen-jsiigotarget)</code>)  Publish Go bindings to a git repository. __*Default*__: no publishing
  * **publishToMaven** (<code>[JsiiJavaTarget](#projen-jsiijavatarget)</code>)  Publish to maven. __*Default*__: no publishing
  * **publishToNuget** (<code>[JsiiDotNetTarget](#projen-jsiidotnettarget)</code>)  Publish to NuGet. __*Default*__: no publishing
  * **publishToPypi** (<code>[JsiiPythonTarget](#projen-jsiipythontarget)</code>)  Publish to pypi. __*Default*__: no publishing
  * **python** (<code>[JsiiPythonTarget](#projen-jsiipythontarget)</code>)  *No description* __*Optional*__
  * **rootdir** (<code>string</code>)  *No description* __*Default*__: "."
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **catalog** (<code>[Catalog](#projen-catalog)</code>)  Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. __*Default*__: new version will be announced
  * **cdkVersion** (<code>string</code>)  Minimum target version this library is tested against. 
  * **cdkAssert** (<code>boolean</code>)  Install the @aws-cdk/assert library? __*Default*__: true
  * **cdkDependencies** (<code>Array<string></code>)  Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? __*Optional*__
  * **cdkDependenciesAsDeps** (<code>boolean</code>)  If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). __*Default*__: true
  * **cdkTestDependencies** (<code>Array<string></code>)  AWS CDK modules required for testing. __*Optional*__
  * **cdkVersionPinning** (<code>boolean</code>)  Use pinned version instead of caret version for CDK. __*Default*__: false




## class TaimosTypescriptLibrary 🔹 <a id="taimos-projen-taimostypescriptlibrary"></a>

TypeScript library.

__Extends__: [TypeScriptProject](#projen-typescriptproject)

### Initializer




```ts
new TaimosTypescriptLibrary(options: TaimosTypescriptLibraryOptions)
```

* **options** (<code>[TaimosTypescriptLibraryOptions](#taimos-projen-taimostypescriptlibraryoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **jsiiFqn** (<code>string</code>)  The JSII FQN (fully qualified name) of the project class. __*Default*__: undefined
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Author's Organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
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
  * **npmAccess** (<code>[NpmAccess](#projen-npmaccess)</code>)  Access level of the npm package. __*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
  * **npmDistTag** (<code>string</code>)  Tags can be used to provide an alias instead of version numbers. __*Default*__: "latest"
  * **npmRegistry** (<code>string</code>)  The host name of the npm registry to publish to. __*Optional*__
  * **npmRegistryUrl** (<code>string</code>)  The base URL of the npm package registry. __*Default*__: "https://registry.npmjs.org"
  * **npmTaskExecution** (<code>[NpmTaskExecution](#projen-npmtaskexecution)</code>)  Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz). __*Default*__: NpmTaskExecution.PROJEN
  * **npmTokenSecret** (<code>string</code>)  GitHub secret which contains the NPM token to use when publishing packages. __*Default*__: "NPM_TOKEN"
  * **packageManager** (<code>[NodePackageManager](#projen-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. 
  * **antitamper** (<code>boolean</code>)  Checks that after build there are no modified files on git. __*Default*__: true
  * **artifactsDirectory** (<code>string</code>)  A directory which will contain artifacts to be published to npm. __*Default*__: "dist"
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **dependabot** (<code>boolean</code>)  Include dependabot configuration. __*Default*__: true
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[JestOptions](#projen-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **jsiiReleaseVersion** (<code>string</code>)  Version requirement of `jsii-release` which is used to publish modules to npm. __*Default*__: "latest"
  * **mergify** (<code>boolean</code>)  Adds mergify configuration. __*Default*__: true
  * **mergifyAutoMergeLabel** (<code>string</code>)  Automatically merge PRs that build successfully and have this label. __*Default*__: "auto-merge"
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **mutableBuild** (<code>boolean</code>)  Automatically update files modified during builds to pull-request branches. __*Default*__: true
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true
  * **projenDuringBuild** (<code>boolean</code>)  Execute `projen` as the first step of the `build` task to synthesize project files. __*Default*__: true
  * **projenUpgradeAutoMerge** (<code>boolean</code>)  Automatically merge projen upgrade PRs when build passes. __*Default*__: "true" if mergify auto-merge is enabled (default)
  * **projenUpgradeSchedule** (<code>Array<string></code>)  Customize the projenUpgrade schedule in cron expression. __*Default*__: [ "0 6 * * *" ]
  * **projenUpgradeSecret** (<code>string</code>)  Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). __*Default*__: no automatic projen upgrade pull requests
  * **projenVersion** (<code>string</code>)  Version of projen to install. __*Default*__: Defaults to the latest version.
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>string</code>)  The contents of the pull request template. __*Default*__: default content
  * **releaseBranches** (<code>Array<string></code>)  Branches which trigger a release. __*Default*__: [ "main" ]
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  Define a GitHub workflow for releasing from "main" when new versions are bumped. __*Default*__: true if not a subproject
  * **releaseWorkflowSetupSteps** (<code>Array<any></code>)  A set of workflow steps to execute in order to setup the workflow container. __*Optional*__
  * **workflowBootstrapSteps** (<code>Array<any></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **compileBeforeTest** (<code>boolean</code>)  Compile the code before running tests. __*Default*__: if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false.
  * **disableTsconfig** (<code>boolean</code>)  Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). __*Default*__: false
  * **docgen** (<code>boolean</code>)  Docgen by Typedoc. __*Default*__: false
  * **docsDirectory** (<code>string</code>)  Docs directory. __*Default*__: "docs"
  * **entrypointTypes** (<code>string</code>)  The .d.ts file that includes the type declarations for this module. __*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
  * **eslint** (<code>boolean</code>)  Setup eslint. __*Default*__: true
  * **eslintOptions** (<code>[EslintOptions](#projen-eslintoptions)</code>)  Eslint options. __*Default*__: opinionated default options
  * **libdir** (<code>string</code>)  Typescript  artifacts output directory. __*Default*__: "lib"
  * **package** (<code>boolean</code>)  Defines a `yarn package` command that will produce a tarball and place it under `dist/js`. __*Default*__: true
  * **sampleCode** (<code>boolean</code>)  Generate one-time sample in `src/` and `test/` if there are no files there. __*Default*__: true
  * **srcdir** (<code>string</code>)  Typescript sources directory. __*Default*__: "src"
  * **testdir** (<code>string</code>)  Jest tests directory. Tests files should be named `xxx.test.ts`. __*Default*__: "test"
  * **tsconfig** (<code>[TypescriptConfigOptions](#projen-typescriptconfigoptions)</code>)  Custom TSConfig. __*Optional*__
  * **typescriptVersion** (<code>string</code>)  TypeScript version to use. __*Default*__: "latest"




## struct TaimosCdkAppOptions 🔹 <a id="taimos-projen-taimoscdkappoptions"></a>






Name | Type | Description 
-----|------|-------------
**cdkVersion**🔹 | <code>string</code> | AWS CDK version to use.
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**antitamper**?🔹 | <code>boolean</code> | Checks that after build there are no modified files on git.<br/>__*Default*__: true
**appEntrypoint**?🔹 | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default).<br/>__*Default*__: "main.ts"
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain artifacts to be published to npm.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Author's Organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**cdkDependencies**?🔹 | <code>Array<string></code> | Which AWS CDK modules (those that start with "@aws-cdk/") this app uses.<br/>__*Optional*__
**cdkPipelines**?🔹 | <code>boolean</code> | Enable CDK pipelines.<br/>__*Default*__: false
**cdkVersionPinning**?🔹 | <code>boolean</code> | Use pinned version instead of caret version for CDK.<br/>__*Default*__: false
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**compileBeforeTest**?🔹 | <code>boolean</code> | Compile the code before running tests.<br/>__*Default*__: if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false.
**context**?🔹 | <code>Map<string, string></code> | Additional context to include in `cdk.json`.<br/>__*Optional*__
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Include dependabot configuration.<br/>__*Default*__: true
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**disableTsconfig**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).<br/>__*Default*__: false
**docgen**?🔹 | <code>boolean</code> | Docgen by Typedoc.<br/>__*Default*__: false
**docsDirectory**?🔹 | <code>string</code> | Docs directory.<br/>__*Default*__: "docs"
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**entrypointTypes**?🔹 | <code>string</code> | The .d.ts file that includes the type declarations for this module.<br/>__*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
**eslint**?🔹 | <code>boolean</code> | Setup eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[EslintOptions](#projen-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[JestOptions](#projen-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiFqn**?🔹 | <code>string</code> | The JSII FQN (fully qualified name) of the project class.<br/>__*Default*__: undefined
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `jsii-release` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**libdir**?🔹 | <code>string</code> | Typescript  artifacts output directory.<br/>__*Default*__: "lib"
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?🔹 | <code>boolean</code> | Adds mergify configuration.<br/>__*Default*__: true
**mergifyAutoMergeLabel**?🔹 | <code>string</code> | Automatically merge PRs that build successfully and have this label.<br/>__*Default*__: "auto-merge"
**mergifyOptions**?🔹 | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?🔹 | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[NpmAccess](#projen-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | Tags can be used to provide an alias instead of version numbers.<br/>__*Default*__: "latest"
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTaskExecution**?🔹 | <code>[NpmTaskExecution](#projen-npmtaskexecution)</code> | Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz).<br/>__*Default*__: NpmTaskExecution.PROJEN
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?🔹 | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**package**?🔹 | <code>boolean</code> | Defines a `yarn package` command that will produce a tarball and place it under `dist/js`.<br/>__*Default*__: true
**packageManager**?🔹 | <code>[NodePackageManager](#projen-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**projectType**?🔹 | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true
**projenDuringBuild**?🔹 | <code>boolean</code> | Execute `projen` as the first step of the `build` task to synthesize project files.<br/>__*Default*__: true
**projenUpgradeAutoMerge**?🔹 | <code>boolean</code> | Automatically merge projen upgrade PRs when build passes.<br/>__*Default*__: "true" if mergify auto-merge is enabled (default)
**projenUpgradeSchedule**?🔹 | <code>Array<string></code> | Customize the projenUpgrade schedule in cron expression.<br/>__*Default*__: [ "0 6 * * *" ]
**projenUpgradeSecret**?🔹 | <code>string</code> | Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).<br/>__*Default*__: no automatic projen upgrade pull requests
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>string</code> | The contents of the pull request template.<br/>__*Default*__: default content
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releaseBranches**?🔹 | <code>Array<string></code> | Branches which trigger a release.<br/>__*Default*__: [ "main" ]
**releaseEveryCommit**?🔹 | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseSchedule**?🔹 | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for releasing from "main" when new versions are bumped.<br/>__*Default*__: true if not a subproject
**releaseWorkflowSetupSteps**?🔹 | <code>Array<any></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**requireApproval**?🔹 | <code>[CdkApprovalLevel](#projen-cdkapprovallevel)</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.<br/>__*Default*__: CdkApprovalLevel.BROADENING
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scripts**?🔹 | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**sops**?🔹 | <code>boolean</code> | Enable storing secrets using Mozilla SOPS in a file sops.json.<br/>__*Default*__: false
**srcdir**?🔹 | <code>string</code> | Typescript sources directory.<br/>__*Default*__: "src"
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**testdir**?🔹 | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`.<br/>__*Default*__: "test"
**tsconfig**?🔹 | <code>[TypescriptConfigOptions](#projen-typescriptconfigoptions)</code> | Custom TSConfig.<br/>__*Optional*__
**typescriptVersion**?🔹 | <code>string</code> | TypeScript version to use.<br/>__*Default*__: "latest"
**workflowBootstrapSteps**?🔹 | <code>Array<any></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`



## struct TaimosCdkConstructLibraryOptions 🔹 <a id="taimos-projen-taimoscdkconstructlibraryoptions"></a>






Name | Type | Description 
-----|------|-------------
**author**🔹 | <code>string</code> | The name of the library author.
**authorAddress**🔹 | <code>string</code> | Email or URL of the library author.
**cdkVersion**🔹 | <code>string</code> | Minimum target version this library is tested against.
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**repositoryUrl**🔹 | <code>string</code> | Git repository URL.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**antitamper**?🔹 | <code>boolean</code> | Checks that after build there are no modified files on git.<br/>__*Default*__: true
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain artifacts to be published to npm.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Author's Organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**catalog**?🔹 | <code>[Catalog](#projen-catalog)</code> | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.<br/>__*Default*__: new version will be announced
**cdkAssert**?🔹 | <code>boolean</code> | Install the @aws-cdk/assert library?<br/>__*Default*__: true
**cdkDependencies**?🔹 | <code>Array<string></code> | Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed?<br/>__*Optional*__
**cdkDependenciesAsDeps**?🔹 | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).<br/>__*Default*__: true
**cdkTestDependencies**?🔹 | <code>Array<string></code> | AWS CDK modules required for testing.<br/>__*Optional*__
**cdkVersionPinning**?🔹 | <code>boolean</code> | Use pinned version instead of caret version for CDK.<br/>__*Default*__: false
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**compat**?🔹 | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation.<br/>__*Default*__: false
**compatIgnore**?🔹 | <code>string</code> | Name of the ignore file for API compatibility tests.<br/>__*Default*__: ".compatignore"
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Include dependabot configuration.<br/>__*Default*__: true
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**docgen**?🔹 | <code>boolean</code> | Automatically generate API.md from jsii.<br/>__*Default*__: true
**dotnet**?⚠️ | <code>[JsiiDotNetTarget](#projen-jsiidotnettarget)</code> | __*Optional*__
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**eslint**?🔹 | <code>boolean</code> | Install eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[EslintOptions](#projen-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**excludeTypescript**?🔹 | <code>Array<string></code> | Accepts a list of glob patterns.<br/>__*Optional*__
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[JestOptions](#projen-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiFqn**?🔹 | <code>string</code> | The JSII FQN (fully qualified name) of the project class.<br/>__*Default*__: undefined
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `jsii-release` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?🔹 | <code>boolean</code> | Adds mergify configuration.<br/>__*Default*__: true
**mergifyAutoMergeLabel**?🔹 | <code>string</code> | Automatically merge PRs that build successfully and have this label.<br/>__*Default*__: "auto-merge"
**mergifyOptions**?🔹 | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?🔹 | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[NpmAccess](#projen-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | Tags can be used to provide an alias instead of version numbers.<br/>__*Default*__: "latest"
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTaskExecution**?🔹 | <code>[NpmTaskExecution](#projen-npmtaskexecution)</code> | Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz).<br/>__*Default*__: NpmTaskExecution.PROJEN
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?🔹 | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**packageManager**?🔹 | <code>[NodePackageManager](#projen-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**projectType**?🔹 | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true
**projenDuringBuild**?🔹 | <code>boolean</code> | Execute `projen` as the first step of the `build` task to synthesize project files.<br/>__*Default*__: true
**projenUpgradeAutoMerge**?🔹 | <code>boolean</code> | Automatically merge projen upgrade PRs when build passes.<br/>__*Default*__: "true" if mergify auto-merge is enabled (default)
**projenUpgradeSchedule**?🔹 | <code>Array<string></code> | Customize the projenUpgrade schedule in cron expression.<br/>__*Default*__: [ "0 6 * * *" ]
**projenUpgradeSecret**?🔹 | <code>string</code> | Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).<br/>__*Default*__: no automatic projen upgrade pull requests
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**publishToGo**?🔹 | <code>[JsiiGoTarget](#projen-jsiigotarget)</code> | Publish Go bindings to a git repository.<br/>__*Default*__: no publishing
**publishToMaven**?🔹 | <code>[JsiiJavaTarget](#projen-jsiijavatarget)</code> | Publish to maven.<br/>__*Default*__: no publishing
**publishToNuget**?🔹 | <code>[JsiiDotNetTarget](#projen-jsiidotnettarget)</code> | Publish to NuGet.<br/>__*Default*__: no publishing
**publishToPypi**?🔹 | <code>[JsiiPythonTarget](#projen-jsiipythontarget)</code> | Publish to pypi.<br/>__*Default*__: no publishing
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>string</code> | The contents of the pull request template.<br/>__*Default*__: default content
**python**?⚠️ | <code>[JsiiPythonTarget](#projen-jsiipythontarget)</code> | __*Optional*__
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releaseBranches**?🔹 | <code>Array<string></code> | Branches which trigger a release.<br/>__*Default*__: [ "main" ]
**releaseEveryCommit**?🔹 | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseSchedule**?🔹 | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for releasing from "main" when new versions are bumped.<br/>__*Default*__: true if not a subproject
**releaseWorkflowSetupSteps**?🔹 | <code>Array<any></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**rootdir**?🔹 | <code>string</code> | __*Default*__: "."
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scripts**?🔹 | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**workflowBootstrapSteps**?🔹 | <code>Array<any></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`



## struct TaimosTypescriptLibraryOptions 🔹 <a id="taimos-projen-taimostypescriptlibraryoptions"></a>






Name | Type | Description 
-----|------|-------------
**defaultReleaseBranch**🔹 | <code>string</code> | The name of the main release branch.
**name**🔹 | <code>string</code> | This is the name of your project.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**antitamper**?🔹 | <code>boolean</code> | Checks that after build there are no modified files on git.<br/>__*Default*__: true
**artifactsDirectory**?🔹 | <code>string</code> | A directory which will contain artifacts to be published to npm.<br/>__*Default*__: "dist"
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Author's Organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**compileBeforeTest**?🔹 | <code>boolean</code> | Compile the code before running tests.<br/>__*Default*__: if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false.
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**dependabot**?🔹 | <code>boolean</code> | Include dependabot configuration.<br/>__*Default*__: true
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**disableTsconfig**?🔹 | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).<br/>__*Default*__: false
**docgen**?🔹 | <code>boolean</code> | Docgen by Typedoc.<br/>__*Default*__: false
**docsDirectory**?🔹 | <code>string</code> | Docs directory.<br/>__*Default*__: "docs"
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**entrypointTypes**?🔹 | <code>string</code> | The .d.ts file that includes the type declarations for this module.<br/>__*Default*__: .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
**eslint**?🔹 | <code>boolean</code> | Setup eslint.<br/>__*Default*__: true
**eslintOptions**?🔹 | <code>[EslintOptions](#projen-eslintoptions)</code> | Eslint options.<br/>__*Default*__: opinionated default options
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[JestOptions](#projen-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**jsiiFqn**?🔹 | <code>string</code> | The JSII FQN (fully qualified name) of the project class.<br/>__*Default*__: undefined
**jsiiReleaseVersion**?🔹 | <code>string</code> | Version requirement of `jsii-release` which is used to publish modules to npm.<br/>__*Default*__: "latest"
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**libdir**?🔹 | <code>string</code> | Typescript  artifacts output directory.<br/>__*Default*__: "lib"
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?🔹 | <code>boolean</code> | Adds mergify configuration.<br/>__*Default*__: true
**mergifyAutoMergeLabel**?🔹 | <code>string</code> | Automatically merge PRs that build successfully and have this label.<br/>__*Default*__: "auto-merge"
**mergifyOptions**?🔹 | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**mutableBuild**?🔹 | <code>boolean</code> | Automatically update files modified during builds to pull-request branches.<br/>__*Default*__: true
**npmAccess**?🔹 | <code>[NpmAccess](#projen-npmaccess)</code> | Access level of the npm package.<br/>__*Default*__: for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.
**npmDistTag**?🔹 | <code>string</code> | Tags can be used to provide an alias instead of version numbers.<br/>__*Default*__: "latest"
**npmRegistry**?⚠️ | <code>string</code> | The host name of the npm registry to publish to.<br/>__*Optional*__
**npmRegistryUrl**?🔹 | <code>string</code> | The base URL of the npm package registry.<br/>__*Default*__: "https://registry.npmjs.org"
**npmTaskExecution**?🔹 | <code>[NpmTaskExecution](#projen-npmtaskexecution)</code> | Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz).<br/>__*Default*__: NpmTaskExecution.PROJEN
**npmTokenSecret**?🔹 | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages.<br/>__*Default*__: "NPM_TOKEN"
**npmignore**?🔹 | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**package**?🔹 | <code>boolean</code> | Defines a `yarn package` command that will produce a tarball and place it under `dist/js`.<br/>__*Default*__: true
**packageManager**?🔹 | <code>[NodePackageManager](#projen-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**projectType**?🔹 | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true
**projenDuringBuild**?🔹 | <code>boolean</code> | Execute `projen` as the first step of the `build` task to synthesize project files.<br/>__*Default*__: true
**projenUpgradeAutoMerge**?🔹 | <code>boolean</code> | Automatically merge projen upgrade PRs when build passes.<br/>__*Default*__: "true" if mergify auto-merge is enabled (default)
**projenUpgradeSchedule**?🔹 | <code>Array<string></code> | Customize the projenUpgrade schedule in cron expression.<br/>__*Default*__: [ "0 6 * * *" ]
**projenUpgradeSecret**?🔹 | <code>string</code> | Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).<br/>__*Default*__: no automatic projen upgrade pull requests
**projenVersion**?🔹 | <code>string</code> | Version of projen to install.<br/>__*Default*__: Defaults to the latest version.
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>string</code> | The contents of the pull request template.<br/>__*Default*__: default content
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**releaseBranches**?🔹 | <code>Array<string></code> | Branches which trigger a release.<br/>__*Default*__: [ "main" ]
**releaseEveryCommit**?🔹 | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseSchedule**?🔹 | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for releasing from "main" when new versions are bumped.<br/>__*Default*__: true if not a subproject
**releaseWorkflowSetupSteps**?🔹 | <code>Array<any></code> | A set of workflow steps to execute in order to setup the workflow container.<br/>__*Optional*__
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**sampleCode**?🔹 | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there.<br/>__*Default*__: true
**scripts**?🔹 | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**srcdir**?🔹 | <code>string</code> | Typescript sources directory.<br/>__*Default*__: "src"
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**testdir**?🔹 | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`.<br/>__*Default*__: "test"
**tsconfig**?🔹 | <code>[TypescriptConfigOptions](#projen-typescriptconfigoptions)</code> | Custom TSConfig.<br/>__*Optional*__
**typescriptVersion**?🔹 | <code>string</code> | TypeScript version to use.<br/>__*Default*__: "latest"
**workflowBootstrapSteps**?🔹 | <code>Array<any></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`



