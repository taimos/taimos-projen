const { cdk, javascript, Gitpod, DevEnvironmentDockerImage } = require('projen');

const project = new cdk.JsiiProject({
  name: '@taimos/projen',
  authorAddress: 'info@taimos.de',
  authorName: 'Thorsten Hoeger',
  authorOrganization: true,
  copyrightOwner: 'Taimos GmbH',
  copyrightPeriod: '2020',
  repository: 'https://github.com/taimos/taimos-projen.git',
  defaultReleaseBranch: 'main',
  peerDeps: [
    'projen',
  ],
  devDeps: [
    'projen',
  ],
  license: 'Apache-2.0',
  licensed: true,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  projenUpgradeSecret: 'GH_TOKEN',
});

const gp = new Gitpod(project, {
  dockerImage: DevEnvironmentDockerImage.fromImage('taimos/gitpod'),
});
gp.addCustomTask({
  init: 'yarn install --check-files --frozen-lockfile',
  command: 'npx projen build',
});

project.synth();
