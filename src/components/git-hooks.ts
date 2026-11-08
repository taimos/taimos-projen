import { relative } from 'path';
import { Component, JsonPatch, TextFile, YamlFile, typescript } from 'projen';

/**
 * A package that gets lint and typecheck jobs in `lefthook.yml`.
 */
export interface GitHooksPackage {
  /** Package directory relative to the repo root, e.g. `packages/web`. */
  readonly path: string;
  /**
   * File glob that selects the staged files that trigger the jobs.
   *
   * @default '*.{ts,tsx}'
   */
  readonly glob?: string;
  /**
   * Command that lints the package. `{staged_files}` is replaced by lefthook.
   *
   * @default 'pnpm run lint'
   */
  readonly lint?: string;
  /**
   * Command that typechecks the package.
   *
   * @default 'pnpm run typecheck'
   */
  readonly typecheck?: string;
}

export interface GitHooksOptions {
  /**
   * The pinned lefthook version added as a devDependency.
   *
   * @default '1.11.13'
   */
  readonly lefthookVersion?: string;
  /**
   * Add a pre-commit gitleaks scan of staged changes. Requires the `gitleaks`
   * binary on the PATH. It reuses `.gitleaks.toml` when that file exists.
   *
   * @default true
   */
  readonly gitleaks?: boolean;
  /**
   * Add a pre-commit check that fails when `projen` synth changes any file.
   *
   * @default true
   */
  readonly projenDrift?: boolean;
  /**
   * Generate eslint and `tsc --noEmit` jobs for every projen TypeScript
   * subproject, scoped to the subproject directory.
   *
   * @default true
   */
  readonly subprojectChecks?: boolean;
  /**
   * Additional (non-projen) packages, e.g. frontends, that run their own
   * `lint` and `typecheck` package scripts.
   *
   * @default []
   */
  readonly packages?: GitHooksPackage[];
  /**
   * Types accepted by the commit-msg check on the first commit of a branch.
   * Keep this in sync with the PR title check.
   *
   * @default ['feat', 'fix', 'chore']
   */
  readonly commitTypes?: string[];
  /**
   * The branch the first-commit detection compares against.
   *
   * @default - the `defaultReleaseBranch` of the project, falling back to 'main'
   */
  readonly defaultBranch?: string;
}

const SCRIPT_DIR = '.lefthook';

/**
 * Local git hooks managed by Lefthook (ADR-0013): a generated `lefthook.yml`,
 * a root `prepare` script that runs `lefthook install`, and a pinned
 * `lefthook` devDependency.
 *
 * Hooks cover a staged secret scan, projen drift, lint and typecheck per
 * package, and a Conventional Commits check on the first commit of a branch.
 * CI should set `LEFTHOOK=0`.
 */
export class GitHooks extends Component {

  /** The generated `lefthook.yml`. */
  public readonly configFile: YamlFile;

  /** The generated commit-msg check script. */
  public readonly commitMsgScript: TextFile;

  /** The generated projen drift check script, if enabled. */
  public readonly projenDriftScript?: TextFile;

  private readonly pkgs: GitHooksPackage[];
  private readonly options: GitHooksOptions;

  constructor(private readonly tsProject: typescript.TypeScriptProject, options: GitHooksOptions = {}) {
    super(tsProject);
    this.options = options;
    this.pkgs = [...(options.packages ?? [])];

    const version = options.lefthookVersion ?? '1.11.13';
    tsProject.addDevDeps(`lefthook@${version}`);
    tsProject.package.setScript('prepare', 'lefthook install');

    const types = options.commitTypes ?? ['feat', 'fix', 'chore'];
    const branch = options.defaultBranch ?? 'main';

    this.commitMsgScript = new TextFile(tsProject, `${SCRIPT_DIR}/commit-msg.sh`, {
      executable: true,
      lines: [
        '#!/usr/bin/env sh',
        '# Only the first commit of a branch must follow Conventional Commits (header only).',
        'set -eu',
        'msg_file="$1"',
        `base="${branch}"`,
        'ref=$(git rev-parse --verify --quiet "origin/$base" || git rev-parse --verify --quiet "$base" || true)',
        'if [ -n "$ref" ] && git rev-parse --verify --quiet HEAD >/dev/null; then',
        '  mb=$(git merge-base "$ref" HEAD 2>/dev/null || true)',
        '  if [ -n "$mb" ] && [ "$(git rev-list --count "$mb"..HEAD)" -gt 0 ]; then',
        '    exit 0',
        '  fi',
        'fi',
        'header=$(grep -v "^#" "$msg_file" | head -n 1)',
        `pattern='^(${types.join('|')})(\\([^)]+\\))?!?: .+'`,
        'case "$header" in',
        '  Merge\\ *|Revert\\ *|fixup!\\ *|squash!\\ *) exit 0 ;;',
        'esac',
        'if ! printf "%s" "$header" | grep -Eq "$pattern"; then',
        '  echo "The first commit of a branch must follow Conventional Commits: <type>: <subject>" >&2',
        `  echo "Allowed types: ${types.join(', ')}" >&2`,
        '  echo "Got: $header" >&2',
        '  exit 1',
        'fi',
      ],
    });

    if (options.projenDrift ?? true) {
      this.projenDriftScript = new TextFile(tsProject, `${SCRIPT_DIR}/projen-drift.sh`, {
        executable: true,
        lines: [
          '#!/usr/bin/env sh',
          '# Fail when projen synth changes files. Compares the working tree before and',
          '# after synth, so unstaged changes that existed before do not fail the check.',
          'set -eu',
          'snapshot() { { git status --porcelain=v1 -uall; git diff; git ls-files -o --exclude-standard | xargs -r cat; } | cksum; }',
          'before=$(snapshot)',
          'pnpm exec projen',
          'after=$(snapshot)',
          'if [ "$before" != "$after" ]; then',
          '  echo "projen synth changed files. Review and stage the generated changes." >&2',
          '  git status --short >&2',
          '  exit 1',
          'fi',
        ],
      });
    }

    this.configFile = new YamlFile(tsProject, 'lefthook.yml', {
      marker: true,
      obj: { 'pre-commit': { piped: true, jobs: [] }, 'commit-msg': { jobs: [] } },
    });
  }

  /** Add a package that runs its own lint and typecheck scripts. */
  public addPackage(pkg: GitHooksPackage): void {
    this.pkgs.push(pkg);
  }

  preSynthesize(): void {
    const preJobs: any[] = [];
    if (this.projenDriftScript) {
      preJobs.push({ name: 'projen-drift', run: `sh ${SCRIPT_DIR}/projen-drift.sh` });
    }

    const parallel: any[] = [];
    if (this.options.gitleaks ?? true) {
      parallel.push({ name: 'gitleaks', run: 'gitleaks git --staged --redact --no-banner' });
    }

    const entries: GitHooksPackage[] = [];
    if (this.options.subprojectChecks ?? true) {
      for (const sub of this.tsProject.subprojects) {
        if (sub instanceof typescript.TypeScriptProject) {
          const path = relative(this.tsProject.outdir, sub.outdir);
          entries.push({
            path,
            glob: '*.ts',
            lint: 'pnpm exec eslint {staged_files}',
            typecheck: 'pnpm exec tsc --noEmit',
          });
        }
      }
    }
    entries.push(...this.pkgs);

    for (const e of entries) {
      const name = e.path.split('/').filter(Boolean).pop()!;
      const base = { root: `${e.path.replace(/\/+$/, '')}/`, glob: e.glob ?? '*.{ts,tsx}' };
      parallel.push({ name: `lint-${name}`, ...base, run: e.lint ?? 'pnpm run lint' });
      parallel.push({ name: `typecheck-${name}`, ...base, run: e.typecheck ?? 'pnpm run typecheck' });
    }
    if (parallel.length > 0) {
      preJobs.push({ group: { parallel: true, jobs: parallel } });
    }

    this.configFile.patch(
      JsonPatch.replace('/pre-commit/jobs', preJobs),
      JsonPatch.replace('/commit-msg/jobs', [
        { name: 'conventional-first-commit', run: `sh ${SCRIPT_DIR}/commit-msg.sh {1}` },
      ]),
    );
  }
}
