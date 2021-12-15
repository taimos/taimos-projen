import { javascript } from 'projen';
import { TaimosCdkApp, TaimosCdkAppOptions } from './cdk-app';

export interface PrivateTaimosCdkAppOptions extends TaimosCdkAppOptions {
  //
}

/**
 * Private AWS CDK app in TypeScript
 *
 * @pjid taimos-cdk-app-private
 */
export class PrivateTaimosCdkApp extends TaimosCdkApp {

  protected readonly npmConfig: javascript.NpmConfig;

  constructor(options: PrivateTaimosCdkAppOptions) {
    super({
      licensed: false,
      npmAccess: javascript.NpmAccess.RESTRICTED,
      ...options,
    });

    this.addDevDeps('@taimos/projen');
    this.addDeps('@taimos/constructs');

    if (options.cdkVersion.startsWith('1.')) {
      this.addCdkDependency(
        '@aws-cdk/aws-s3-deployment',
        '@aws-cdk/aws-ses',
        '@aws-cdk/aws-autoscaling',
        '@aws-cdk/aws-apigateway',
        '@aws-cdk/aws-apigatewayv2',
        '@aws-cdk/aws-apigatewayv2-integrations',
        '@aws-cdk/aws-cloudwatch',
        '@aws-cdk/aws-codebuild',
        '@aws-cdk/aws-codepipeline',
        '@aws-cdk/aws-codepipeline-actions',
        '@aws-cdk/aws-certificatemanager',
        '@aws-cdk/aws-cloudwatch-actions',
        '@aws-cdk/aws-dynamodb',
        '@aws-cdk/aws-ec2',
        '@aws-cdk/aws-ecs',
        '@aws-cdk/aws-ecs-patterns',
        '@aws-cdk/aws-elasticloadbalancingv2',
        '@aws-cdk/aws-elasticloadbalancingv2-actions',
        '@aws-cdk/aws-elasticloadbalancingv2-targets',
        '@aws-cdk/aws-events-targets',
        '@aws-cdk/aws-events',
        '@aws-cdk/aws-iam',
        '@aws-cdk/aws-kms',
        '@aws-cdk/aws-lambda',
        '@aws-cdk/aws-lambda-nodejs',
        '@aws-cdk/aws-logs',
        '@aws-cdk/aws-rds',
        '@aws-cdk/aws-route53',
        '@aws-cdk/aws-route53-targets',
        '@aws-cdk/aws-route53-patterns',
        '@aws-cdk/aws-s3',
        '@aws-cdk/aws-s3-notifications',
        '@aws-cdk/aws-secretsmanager',
        '@aws-cdk/aws-sns',
        '@aws-cdk/aws-sns-subscriptions',
        '@aws-cdk/aws-sqs',
        '@aws-cdk/aws-ssm',
        '@aws-cdk/aws-stepfunctions',
        '@aws-cdk/aws-stepfunctions-tasks',
        '@aws-cdk/core',
        '@aws-cdk/custom-resources',
        '@aws-cdk/cloud-assembly-schema',
        '@aws-cdk/cx-api',
        '@aws-cdk/pipelines',
      );
    } else {
      this.addDeps(
        '@aws-cdk/aws-appsync-alpha',
        '@aws-cdk/aws-apigatewayv2-alpha',
        '@aws-cdk/aws-apigatewayv2-integrations-alpha',
      );
    }

    this.npmConfig = new javascript.NpmConfig(this);
    this.npmConfig.addConfig('//registry.npmjs.org/:_authToken', '${NPM_TOKEN}');

  }
}