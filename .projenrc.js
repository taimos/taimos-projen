const { cdk, javascript, github, DevEnvironmentDockerImage } = require('projen');

const project = new cdk.JsiiProject({
  name: '@taimos/projen',
  authorAddress: 'info@taimos.de',
  authorName: 'Thorsten Hoeger',
  authorOrganization: true,
  copyrightOwner: 'Taimos GmbH',
  copyrightPeriod: '2020',
  repository: 'https://github.com/taimos/taimos-projen.git',
  packageManager: javascript.NodePackageManager.NPM,
  defaultReleaseBranch: 'main',
  jsiiVersion: '5.9.21',
  peerDeps: [
    'projen@>=0.104.5 <1.0.0',
    'constructs@^10.5.1',
    'projen-pipelines@>=0.3.25',
  ],
  devDeps: [
    'projen@0.104.5',
    'constructs@10.8.1',
    'projen-pipelines@0.3.25',
    'yaml',
  ],
  license: 'Apache-2.0',
  licensed: true,
  releaseToNpm: true,
  npmTrustedPublishing: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  gitpod: false,
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['hoegertn', 'taimos-projen[bot]'], secret: 'GITHUB_TOKEN' },
  depsUpgradeOptions: { workflowOptions: { schedule: javascript.UpgradeDependenciesSchedule.WEEKLY } },
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
    mergeQueue: true,
    mergeQueueOptions: {
      autoQueue: true,
    },
  },
});

// projen 0.100.x switched eslint to typescript-eslint's `projectService`, which
// cannot resolve `.projenrc.js` because it is not part of any tsconfig. Allow it
// to use the default (inferred) project so linting the projenrc does not fail.
project.tryFindObjectFile('.eslintrc.json').addOverride('parserOptions.projectService', {
  allowDefaultProject: ['.projenrc.js'],
});

// Force patched versions of transitive dependencies flagged by `npm audit`.
// These are same-major, in-range patches, so the tools that pull them (jest 29,
// eslint, @babel, jsii tooling) keep working while the CVEs are resolved.
// Review on the next dependency upgrade: once jest moves to 30 and the jsii
// toolchain advances, most of these overrides become unnecessary.
project.package.addPackageResolutions(
  'brace-expansion@^2.0.2',
  'picomatch@^2.3.2',
  'js-yaml@^4.3.2',
  'handlebars@^4.7.10',
  'flatted@^3.4.4',
  'fast-uri@^3.1.8',
  'browserslist@^4.29.3',
  'baseline-browser-mapping@^2.11.0',
  'sprintf-js@^1.1.3',
  '@xmldom/xmldom@^0.9.12',
  '@humanfs/node@^0.16.8',
  '@babel/core@^7.29.7',
);

project.synth();
