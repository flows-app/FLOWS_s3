const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  const S3 = new AWS.S3({accessKeyId : event.account.accessKey,secretAccessKey : event.account.secretKey });
  let params = {
    Bucket: event.bucketName, 
    Key: event.objectName
   };
   let response = await S3.getObject(params).promise();

   let result ={
    "contentText": response.Body.toString(),
    "contentBase64": response.Body.toString('base64')
   };
   return result;
}