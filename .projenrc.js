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
//
// EXPIRY SIGNAL: every entry here is a temporary CVE floor, not a permanent pin.
// Drop each one once the real dependency ships the fix in its own range:
//  - jest-29 chain floors (brace-expansion, picomatch, @babel/core, flatted):
//    remove once this project crosses to jest 30 / @types/jest 30.
//  - jsii-toolchain floors (@xmldom/xmldom, fast-uri): remove once jsiiVersion
//    advances past 5.9.21 and ships the patched transitive line.
//  - the rest (js-yaml, handlebars, browserslist, baseline-browser-mapping,
//    sprintf-js, @humanfs/node): remove once the direct consumer bumps its own
//    range to the patched release. Re-check with `npm audit` on each upgrade.
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
  // NOTE: the jsii-rosetta / stream-json advisories are NOT patchable here.
  // jsii-rosetta@5.9.21 is a DIRECT devDep pinned by projen's JsiiBuild to the
  // jsiiVersion string, so `addPackageResolutions('jsii-rosetta@5.9.70')` fails
  // with npm EOVERRIDE (override conflicts with a direct dependency). Overriding
  // the transitive `stream-json` to the patched 3.x line installs fine but breaks
  // the build: jsii-rosetta 5.9.21 imports `stream-json/src/Assembler`, a path
  // stream-json 3.x removed, so `jsii-docgen` dies with MODULE_NOT_FOUND. Both
  // advisories therefore wait on raising jsiiVersion past 5.9.21 (jsii 5.9.70 is
  // unpublished today). See FEAT-001 findings.
);

project.synth();
