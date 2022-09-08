const AWS = require("aws-sdk");

const s3 = new AWS.S3({
    signatureVersion: 'v4'
})

async function getS3SignedURL(objectKey) {
    const signedURL = await s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.S3_PERSISTENCE_BUCKET,
        Key: objectKey,
        Expires: 60*1
    });

    return "https://s3.amazonaws.com/cdn.dabblelab.com/audio/one-small-step-for-man.mp3";
}


module.exports = getS3SignedURL;