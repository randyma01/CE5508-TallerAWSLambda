const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
  var s3 = new AWS.s3();
  var sourceBucket = 'source-bucket-soa';
  var destinationBucket = 'destination-bucket-soa';
  var objectKey = event.Record[0].s3.object.key;
  var copySource = encodeURI(sourceBucket + '/' + objectKey);

  var copyParams = {
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
