const AWS = require('aws-sdk');

async function getS3Object(objectKey) {
    const s3 = new AWS.S3();

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