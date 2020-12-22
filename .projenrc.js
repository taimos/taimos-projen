const { JsiiProject } = require('projen');

const project = new JsiiProject({
  name: '@taimos/projen',
  authorAddress: 'info@taimos.de',
  authorName: 'Thorsten Hoeger',
  authorOrganization: true,
  copyrightOwner: 'Taimos GmbH',
  copyrightPeriod: '2020',
  repository: 'https://github.com/taimos/taimos-projen.git',
  defaultReleaseBranch: 'main',
  mergify: false,
  deps: [
    'projen',
  ],
  releaseBranches: [
    'main',
  ],
  license: 'Apache-2.0',
  licensed: true,
  stability: 'experimental',
  docgen: true,
  typescriptVersion: '^4.1.0',
  tsconfig: {
    compilerOptions: {
      esModuleInterop: true,
    },
  },
  codeCov: true,
  releaseToNpm: true,
  npmDistTag: 'latest --access public', // Hack to release scoped packages
});

project.synth();
