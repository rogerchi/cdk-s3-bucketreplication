# API Reference

**Classes**

Name|Description
----|-----------
[BucketReplication](#cdk-s3-bucketreplication-bucketreplication)|*No description*


**Structs**

Name|Description
----|-----------
[BucketReplicationProps](#cdk-s3-bucketreplication-bucketreplicationprops)|*No description*
[ReplicationDestinationPropertyNoBucket](#cdk-s3-bucketreplication-replicationdestinationpropertynobucket)|*No description*
[ReplicationRulePropertyNoDestination](#cdk-s3-bucketreplication-replicationrulepropertynodestination)|*No description*


**Enums**

Name|Description
----|-----------
[ReplicationDestinationStorageClass](#cdk-s3-bucketreplication-replicationdestinationstorageclass)|*No description*
[ReplicationRuleStatus](#cdk-s3-bucketreplication-replicationrulestatus)|*No description*



## class BucketReplication  <a id="cdk-s3-bucketreplication-bucketreplication"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BucketReplication(scope: Construct, id: string, props: BucketReplicationProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[BucketReplicationProps](#cdk-s3-bucketreplication-bucketreplicationprops)</code>)  *No description*
  * **destinationBucket** (<code>[Bucket](#aws-cdk-aws-s3-bucket)</code>)  *No description* 
  * **sourceBucket** (<code>[Bucket](#aws-cdk-aws-s3-bucket)</code>)  *No description* 
  * **replicationDestinationProperties** (<code>[ReplicationDestinationPropertyNoBucket](#cdk-s3-bucketreplication-replicationdestinationpropertynobucket)</code>)  *No description* __*Optional*__
  * **replicationRuleProperties** (<code>[ReplicationRulePropertyNoDestination](#cdk-s3-bucketreplication-replicationrulepropertynodestination)</code>)  *No description* __*Optional*__




## struct BucketReplicationProps  <a id="cdk-s3-bucketreplication-bucketreplicationprops"></a>






Name | Type | Description 
-----|------|-------------
**destinationBucket** | <code>[Bucket](#aws-cdk-aws-s3-bucket)</code> | <span></span>
**sourceBucket** | <code>[Bucket](#aws-cdk-aws-s3-bucket)</code> | <span></span>
**replicationDestinationProperties**? | <code>[ReplicationDestinationPropertyNoBucket](#cdk-s3-bucketreplication-replicationdestinationpropertynobucket)</code> | __*Optional*__
**replicationRuleProperties**? | <code>[ReplicationRulePropertyNoDestination](#cdk-s3-bucketreplication-replicationrulepropertynodestination)</code> | __*Optional*__



## struct ReplicationDestinationPropertyNoBucket  <a id="cdk-s3-bucketreplication-replicationdestinationpropertynobucket"></a>






Name | Type | Description 
-----|------|-------------
**accessControlTranslation**? | <code>[IResolvable](#aws-cdk-core-iresolvable) &#124; [CfnBucket.AccessControlTranslationProperty](#aws-cdk-aws-s3-cfnbucket-accesscontroltranslationproperty)</code> | __*Optional*__
**account**? | <code>string</code> | __*Optional*__
**encryptionConfiguration**? | <code>[IResolvable](#aws-cdk-core-iresolvable) &#124; [CfnBucket.EncryptionConfigurationProperty](#aws-cdk-aws-s3-cfnbucket-encryptionconfigurationproperty)</code> | __*Optional*__
**metrics**? | <code>[IResolvable](#aws-cdk-core-iresolvable) &#124; [CfnBucket.MetricsProperty](#aws-cdk-aws-s3-cfnbucket-metricsproperty)</code> | __*Optional*__
**replicationTime**? | <code>[IResolvable](#aws-cdk-core-iresolvable) &#124; [CfnBucket.ReplicationTimeProperty](#aws-cdk-aws-s3-cfnbucket-replicationtimeproperty)</code> | __*Optional*__
**storageClass**? | <code>[ReplicationDestinationStorageClass](#cdk-s3-bucketreplication-replicationdestinationstorageclass)</code> | __*Optional*__



## struct ReplicationRulePropertyNoDestination  <a id="cdk-s3-bucketreplication-replicationrulepropertynodestination"></a>






Name | Type | Description 
-----|------|-------------
**deleteMarkerReplication**? | <code>[IResolvable](#aws-cdk-core-iresolvable) &#124; [CfnBucket.DeleteMarkerReplicationProperty](#aws-cdk-aws-s3-cfnbucket-deletemarkerreplicationproperty)</code> | __*Optional*__
**filter**? | <code>[IResolvable](#aws-cdk-core-iresolvable) &#124; [CfnBucket.ReplicationRuleFilterProperty](#aws-cdk-aws-s3-cfnbucket-replicationrulefilterproperty)</code> | __*Optional*__
**id**? | <code>string</code> | __*Optional*__
**prefix**? | <code>string</code> | __*Optional*__
**priority**? | <code>number</code> | __*Optional*__
**sourceSelectionCriteria**? | <code>[IResolvable](#aws-cdk-core-iresolvable) &#124; [CfnBucket.SourceSelectionCriteriaProperty](#aws-cdk-aws-s3-cfnbucket-sourceselectioncriteriaproperty)</code> | __*Optional*__
**status**? | <code>[ReplicationRuleStatus](#cdk-s3-bucketreplication-replicationrulestatus)</code> | __*Optional*__



## enum ReplicationDestinationStorageClass  <a id="cdk-s3-bucketreplication-replicationdestinationstorageclass"></a>



Name | Description
-----|-----
**DEEP_ARCHIVE** |
**GLACIER** |
**INTELLIGENT_TIERING** |
**ONEZONE_IA** |
**OUTPOSTS** |
**REDUCED_REDUNDANCY** |
**STANDARD** |
**STANDARD_IA** |


## enum ReplicationRuleStatus  <a id="cdk-s3-bucketreplication-replicationrulestatus"></a>



Name | Description
-----|-----
**DISABLED** |
**ENABLED** |


