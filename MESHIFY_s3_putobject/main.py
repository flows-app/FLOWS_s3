import boto3
import json
import base64

def handler(event, context):
    print("event")
    print(event)

    bucketName = event['bucketName'];
    objectName = event['objectName'];
    print('writing object '+objectName+' to '+bucketName)

    if 'contentText' in event:
        content = event['contentText'].encode("utf-8")
    else:
        content = base64.b64decode(event['contentBase64'])

    accessKey = event['account']['accessKey']
    secretKey = event['account']['secretKey']
    S3 = boto3.client('s3',
        aws_access_key_id=accessKey,
        aws_secret_access_key=secretKey
    )

    result = S3.put_object(
        Body=content,
        Bucket=bucketName,
        Key=objectName
    )
    return result
