const AWS = require('aws-sdk');

async function getS3Object(s3ObjectKey) {
    const s3 = new AWS.S3();
    const params = {
        Bucket: process.env.S3_PERSISTENCE_BUCKET,
        Key: s3ObjectKey
    }
    
    return await s3.getObject(params, (data, error) => {
        if (error) {
            return error;
        }
    }).promise();
}

module.exports = {
    getS3Object
}