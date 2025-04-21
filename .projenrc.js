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
  peerDeps: [
    'projen@^0.91.20',
    'constructs@^10.4.2',
  ],
  devDeps: [
    'projen@0.91.20',
    'constructs@10.4.2',
  ],
  license: 'Apache-2.0',
  licensed: true,
  releaseToNpm: true,
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

project.synth();
