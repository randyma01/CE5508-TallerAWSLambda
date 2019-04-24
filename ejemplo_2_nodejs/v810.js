import AWS from 'aws-sdk';

exports.handler = async event => {
  let s3 = new AWS.s3();
  let sourceBucket = 'source-bucket-soa';
  let destinationBucket = 'destination-bucket-soa';
  let objectKey = event.Record[0].s3.object.key;
  let copySource = encodeURI(sourceBucket + '/' + objectKey);

  let copyParams = {
    Bucket: destinationBucket,
    CopySource: copySource,
    Key: objectKey
  };

  s3.copyObject(copyParams, function(err, data) {
    if (err) {
      console.log.apply(err, err.stack);
    } else {
      console.log('s3 object copy sucessfully');
    }
  });
};
