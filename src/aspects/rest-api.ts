import * as pj from 'projen';
import { TaimosCdkApp } from '../projects';

export interface RestApiAspectOptions {
  /**
   * The relative file name of  the OpenAPI spec
   */
  readonly openapiFile: string;
}

export class RestApiAspect extends pj.Component {

  constructor(app: TaimosCdkApp, options: RestApiAspectOptions) {
    super(app);

    app.addCdkDependency(
      '@aws-cdk/aws-apigatewayv2',
      '@aws-cdk/aws-apigatewayv2-integrations',
      '@aws-cdk/aws-certificatemanager',
      '@aws-cdk/aws-cloudwatch',
      '@aws-cdk/aws-dynamodb',
      '@aws-cdk/aws-kms',
      '@aws-cdk/aws-lambda',
      '@aws-cdk/aws-lambda-nodejs',
      '@aws-cdk/aws-route53',
      '@aws-cdk/aws-route53-targets',
      '@aws-cdk/pipelines',
    );

    app.addDeps(
      'aws-sdk',
      'jsonwebtoken',
      'jwk-to-pem',
      'axios',
      'uuid',
    );

    app.addDevDeps(
      '@types/aws-lambda',
      'openapi-typescript',
      '@types/jsonwebtoken',
      '@types/jwk-to-pem',
      '@types/uuid',
      'esbuild',
    );

    app.addTask('generate:api', {
      exec: `openapi-typescript ${options.openapiFile} --output src/lambda/types.generated.ts`,
      category: pj.tasks.TaskCategory.BUILD,
      description: 'Generate Types from OpenAPI specification',
    });
  }

}