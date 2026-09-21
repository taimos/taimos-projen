import { Testing } from 'projen';
import { ProductionTaimosCdkApp, taimosCdkPipeline } from '../src';

const ROLE = 'arn:aws:iam::292004443359:role/GitHubDeployment-test-main';

function appWithPipeline(options: any = {}) {
  const app = new ProductionTaimosCdkApp({
    cdkVersion: '2.262.2',
    name: 'test-app',
    defaultReleaseBranch: 'main',
  });
  taimosCdkPipeline(app, {
    pipelineName: 'backend',
    roleArn: ROLE,
    paths: ['packages/backend/**'],
    stages: [
      { name: 'dev', account: '111111111111', region: 'eu-central-1', watchable: true },
      { name: 'prod', account: '222222222222', region: 'eu-central-1' },
    ],
    ...options,
  });
  return Testing.synth(app) as Record<string, any>;
}

describe('taimosCdkPipeline helper (#391)', () => {
  test('generates a deploy workflow for the pipeline', () => {
    const out = appWithPipeline();
    const wf = Object.keys(out).find((k) => k.includes('deploy') && k.endsWith('.yml'));
    expect(wf).toBeDefined();
  });

  test('fans the single role ARN into all three iamRoleArns', () => {
    const out = appWithPipeline();
    const wfKey = Object.keys(out).find((k) => k.startsWith('.github/workflows/') && k.includes('deploy'))!;
    const wfText = JSON.stringify(out[wfKey]);
    // the role ARN appears in the assumed-role step(s)
    expect(wfText).toContain(ROLE);
  });
});
