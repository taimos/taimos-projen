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
    'projen@>=0.100.7 <1.0.0',
    'constructs@^10.5.1',
    'projen-pipelines@>=0.3.19',
  ],
  devDeps: [
    'projen@0.100.7',
    'constructs@10.6.0',
    'projen-pipelines@0.3.19',
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

project.synth();
