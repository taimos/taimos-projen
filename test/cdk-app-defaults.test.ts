import { Testing, javascript } from 'projen';
import { TaimosCdkApp } from '../src';

function synth(project: any): Record<string, any> {
  return Testing.synth(project) as Record<string, any>;
}

describe('TaimosCdkApp defaults (#390)', () => {
  test('defaults the package manager to pnpm', () => {
    const app = new TaimosCdkApp({ cdkVersion: '2.262.2', name: 'test-app', defaultReleaseBranch: 'main' });
    expect(app.package.packageManager).toBe('pnpm');
  });

  test('defaults constructsVersion to 10.6.0 in package.json', () => {
    const app = new TaimosCdkApp({ cdkVersion: '2.262.2', name: 'test-app', defaultReleaseBranch: 'main' });
    // Testing.synth returns .json files already parsed into objects.
    const pkg = synth(app)['package.json'];
    const constructs: string = pkg.dependencies?.constructs ?? pkg.peerDependencies?.constructs ?? '';
    expect(constructs).toContain('10.6.0');
  });

  test('a consumer packageManager still wins', () => {
    const app = new TaimosCdkApp({
      cdkVersion: '2.262.2',
      name: 'test-app',
      defaultReleaseBranch: 'main',
      packageManager: javascript.NodePackageManager.NPM,
    });
    expect(app.package.packageManager).toBe('npm');
  });
});

// #392: copyrightPeriod is defaulted to the current year (removing the drifting
// hardcoded literals). projen's Apache-2.0 LICENSE template does not substitute
// the period into its body, and these project types are Apache-2.0/unlicensed,
// so the value is not observable in any generated file — there is nothing to
// assert here beyond the code change itself. Tracked in the PR body.
