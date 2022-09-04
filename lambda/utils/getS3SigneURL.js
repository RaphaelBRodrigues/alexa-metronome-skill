const AWS = require('aws-sdk');

const s3SignedURLV4Client = new AWS({
    signatureVersion: 'V4',
    region: process.env.S3_PERSISTENCE_REGION
})

function getS3SignedURL(objectKey) {
    const signedURL = s3SignedURLV4Client.getS3SignedURL("getObject", {
        Bucket: process.S3_PERSISTENCE_BUCKER,
        Key: objectKey,
        Expires: 60
    });
    
    return signedURL;
}