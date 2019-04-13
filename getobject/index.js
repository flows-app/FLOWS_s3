const AWS = require("aws-sdk");
const S3 = new AWS.S3();

exports.handler = async (event, context) => {
  var params = {
    Bucket: event.bucketName, 
    Key: event.objectName
   };
   let response = S3.getObject(params).promise();

   let result ={
    "contentText": response.Body.toString(),
    "contentBase64": response.Body.toString('base64')
   };
   return result;
}