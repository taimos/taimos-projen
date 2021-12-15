import * as path from 'path';
import { Component, FileBase, SourceCode, typescript } from 'projen';

export interface SopsAspectOptions {
  /**
   * Define a mapping of SOPS files to SecretsManager secrets.
   *
   * ```json
   * {
   *   sops: 'MySecret'
   * }
   * ```
   *
   * will deploy the file `sops.json` to the secret called `MySecret`
   */
  readonly secrets: { [file: string]: string };
}

export class SopsAspect extends Component {

  public readonly generatedCodeFile: SourceCode;

  constructor(app: typescript.TypeScriptProject, options: SopsAspectOptions) {
    super(app);

    app.addDeps('md5-file');
    app.addDevDeps('secretsmanager-versioning');

    for (const mapping of Object.entries(options.secrets)) {
      const [fileName, secretName] = mapping;

      app.addTask(`sops:open:${fileName}`, {
        description: `Open SOPS file ${fileName}.json in default EDITOR`,
        exec: `sops ${fileName}.json`,
      });
      app.addTask(`sops:deploy:${fileName}`, {
        description: `Deploy contents of SOPS file ${fileName}.json to the secret ${secretName}`,
        exec: `secretsmanager-versioning -f ${fileName}.json ${secretName}`,
      });
    }

    this.generatedCodeFile = new SourceCode(app, path.join(app.srcdir, 'secrets.ts'));
    this.generatedCodeFile.line(`// ${FileBase.PROJEN_MARKER}`);
    this.generatedCodeFile.line('/* eslint-disable */');
    this.generatedCodeFile.line("import { sync as md5 } from 'md5-file';");
    this.generatedCodeFile.line();
    this.generatedCodeFile.line(`export type SecretIndex = ${Object.keys(options.secrets).map(f => `'${f}'`).join(' | ')};`);
    this.generatedCodeFile.line(`export const secretFiles = {\n${Object.keys(options.secrets).map(f => `  '${f}': '${f}.json',`).join('\n')}\n};`);
    this.generatedCodeFile.line(`export const secretNames = {\n${Object.entries(options.secrets).map(f => `  '${f[0]}': '${f[1]}',`).join('\n')}\n};`);
    this.generatedCodeFile.line(`export const secretVersions = {\n${Object.keys(options.secrets).map(f => `  '${f}': md5('${f}.json'),`).join('\n')}\n};`);
    this.generatedCodeFile.line();
  }

}