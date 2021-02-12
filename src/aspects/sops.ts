import * as fs from 'fs';
import * as pj from 'projen';

export class SopsAspect extends pj.Component {

  public static readSopsConfig<T>(): T {
    if (!SopsAspect.config) {
      SopsAspect.config = JSON.parse(fs.readFileSync(process.env.SOPS_FILE!, { encoding: 'utf-8' }).toString());
    }
    return SopsAspect.config as T;
  }

  private static config: any;

  constructor(app: pj.AwsCdkTypeScriptApp) {
    super(app);

    app.cdkConfig.app = `sops exec-file sops.json 'SOPS_FILE={} ${app.cdkConfig.app}'`;

    app.addTask('sops', {
      category: pj.tasks.TaskCategory.MISC,
      description: 'Open SOPS file in default EDITOR',
      exec: 'sops sops.json',
    });
  }

}