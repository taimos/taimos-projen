import * as fs from 'fs';
import * as pj from 'projen';

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

export class SopsAspect extends pj.Component {

  public static readSopsConfig<T>(): T {
    if (!SopsAspect.config) {
      SopsAspect.config = JSON.parse(fs.readFileSync(process.env.SOPS_FILE!, { encoding: 'utf-8' }).toString());
    }
    return SopsAspect.config as T;
  }

  private static config: any;

  constructor(app: pj.NodeProject, options: SopsAspectOptions) {
    super(app);

    app.addDeps('md5-file');
    app.addDevDeps('secretsmanager-versioning');

    for (const mapping of Object.entries(options)) {
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
  }

}