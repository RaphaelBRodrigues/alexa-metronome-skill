const AWS = require('aws-sdk');

const s3SignedURLV4Client = new AWS.S3({
    signatureVersion: 'V4',
    region: process.env.S3_PERSISTENCE_REGION
})

function getS3SignedURL(objectKey) {
    const signedURL = s3SignedURLV4Client.getS3SignedURL("getObject", {
        Bucket: process.S3_PERSISTENCE_BUCKET,
        Key: objectKey,
        Expires: 60
    });

    return signedURL;
}

module.exports = getS3SignedURL;