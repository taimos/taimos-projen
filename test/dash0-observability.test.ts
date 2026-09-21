import { Testing } from 'projen';
import { ProductionTaimosCdkApp } from '../src';

function deps(project: any): Record<string, string> {
  const out = Testing.synth(project) as Record<string, any>;
  const pkg = out['package.json'];
  return { ...pkg.dependencies };
}

function app(options: any = {}) {
  return new ProductionTaimosCdkApp({
    cdkVersion: '2.262.2',
    name: 'test-app',
    defaultReleaseBranch: 'main',
    ...options,
  });
}

describe('ProductionTaimosCdkApp observability defaults (#384)', () => {
  test('does NOT add Lumigo by default', () => {
    expect(deps(app())['@lumigo/cdk-constructs-v2']).toBeUndefined();
  });

  test('adds Lumigo when explicitly enabled', () => {
    expect(deps(app({ lumigo: true }))['@lumigo/cdk-constructs-v2']).toBeDefined();
  });

  test('adds cdk-sops-secrets by default (Dash0 API key is SOPS-encrypted)', () => {
    expect(deps(app())['cdk-sops-secrets']).toBeDefined();
  });

  test('adds cdk-sops-secrets even when both dash0 and sops are disabled is NOT required', () => {
    // With dash0:false AND sops:false, cdk-sops-secrets is not forced.
    expect(deps(app({ dash0: false, sops: false }))['cdk-sops-secrets']).toBeUndefined();
  });

  test('dash0:true alone still brings cdk-sops-secrets', () => {
    expect(deps(app({ dash0: true, sops: false }))['cdk-sops-secrets']).toBeDefined();
  });
});
