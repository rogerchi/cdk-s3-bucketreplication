# CDK Construct for S3 Bucket Replication
A CDK Construct for S3 Bucket Replication.  Can handle cross-account replication.  Make sure the source and destination buckets have versioning enabled.

```
const sourceBucket = new Bucket(this, 'SourceBucket', {
  versioned: true,
});
const destinationBucket = new Bucket(this, 'DestinationBucket', {
  versioned: true,
});

new BucketReplication(this, 'BucketReplication', {
  sourceBucket,
  destinationBucket,
  replicationDestinationProperties: {
    storageClass: ReplicationDestinationStorageClass.STANDARD_IA,
  },
});
```
