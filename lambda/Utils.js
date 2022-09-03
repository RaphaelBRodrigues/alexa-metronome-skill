const AWS = require('aws-sdk');

async function getS3Object(s3ObjectKey) {
    const s3 = new AWS.S3();
    const params = {
        Bucket: process.env.S3_PERSISTENCE_BUCKET,
        Key: s3ObjectKey,
        prefi
    }
    
    return await s3.getObject({
        Bucket: process.env.S3_PERSISTENCE_BUCKET,
        Key: objectKey,
        Prefix: "sounds/"
    }, (data, error) => {
        if (error) {
            return error;
        }
    }).promise();
}

module.exports = {
    getS3Object
}