import * as pj from 'projen';
import { TaimosCdkApp } from '../projects';

export class CdkPipelineAspect extends pj.Component {

  constructor(app: TaimosCdkApp) {
    super(app);

    app.addCdkDependency(
      '@aws-cdk/aws-codebuild',
      '@aws-cdk/aws-codepipeline',
      '@aws-cdk/aws-codepipeline-actions',
      '@aws-cdk/pipelines',
    );
  }

}