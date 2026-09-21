import { Testing, typescript } from 'projen';
import { Gitleaks, MonorepoProject } from '../src';

function projectWithGitleaks(github: boolean, options = {}) {
  const project = new typescript.TypeScriptProject({
    name: 'test-project',
    defaultReleaseBranch: 'main',
    github,
  });
  new Gitleaks(project, options);
  return project;
}

describe('Gitleaks component (#386)', () => {
  test('emits .gitleaks.toml extending the default ruleset', () => {
    const out = Testing.synth(projectWithGitleaks(true)) as Record<string, any>;
    const toml = out['.gitleaks.toml'];
    expect(toml).toContain('[extend]');
    expect(toml).toContain('useDefault = true');
  });

  test('emits a gitleaks PR workflow scanning full history', () => {
    const out = Testing.synth(projectWithGitleaks(true)) as Record<string, any>;
    const wf = out['.github/workflows/gitleaks.yml'];
    expect(wf).toBeDefined();
    expect(wf).toContain('fetch-depth: 0');
    expect(wf).toContain('gitleaks git --no-banner --redact .');
  });

  test('renders a path-scoped allowlist', () => {
    const out = Testing.synth(projectWithGitleaks(true, {
      allowlists: [{
        description: 'FontAwesome token',
        condition: 'AND',
        paths: ['^\\.npmrc$'],
        regexes: ['^[A-F0-9]{8}$'],
      }],
    })) as Record<string, any>;
    const toml = out['.gitleaks.toml'];
    expect(toml).toContain('[[allowlists]]');
    expect(toml).toContain('FontAwesome token');
    expect(toml).toContain('^\\.npmrc$');
  });

  test('pins a custom gitleaks version', () => {
    const out = Testing.synth(projectWithGitleaks(true, { version: '8.99.0' })) as Record<string, any>;
    expect(out['.github/workflows/gitleaks.yml']).toContain('v8.99.0');
  });

  test('throws when GitHub is disabled', () => {
    expect(() => projectWithGitleaks(false)).toThrow(/GitHub/);
  });
});

describe('MonorepoProject gitleaks flag (#386)', () => {
  test('gitleaks:true wires the component onto the monorepo', () => {
    const project = new MonorepoProject({ name: 'test-monorepo', defaultReleaseBranch: 'main', gitleaks: true });
    const out = Testing.synth(project) as Record<string, any>;
    expect(out['.gitleaks.toml']).toContain('useDefault = true');
    expect(out['.github/workflows/gitleaks.yml']).toContain('gitleaks git --no-banner --redact .');
    expect(project.gitleaks).toBeDefined();
  });

  test('no gitleaks artifacts by default', () => {
    const project = new MonorepoProject({ name: 'test-monorepo', defaultReleaseBranch: 'main' });
    const out = Testing.synth(project) as Record<string, any>;
    expect(out['.gitleaks.toml']).toBeUndefined();
    expect(project.gitleaks).toBeUndefined();
  });
});
