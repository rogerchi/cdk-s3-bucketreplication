import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { BucketReplication } from '../src';

test('Simple test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  const sourceBucket = new s3.Bucket(stack, 'SourceBucket');
  const destinationBucket = new s3.Bucket(stack, 'DestinationBucket');

  new BucketReplication(stack, 'BucketReplication', {
    sourceBucket,
    destinationBucket,
  });

  expectCDK(stack).to(countResources('AWS::IAM::Role', 1));
});
