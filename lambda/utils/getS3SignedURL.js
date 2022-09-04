const AWS = require("aws-sdk");

const s3 = new AWS.S3()

async function getS3SignedURL(objectKey) {
    // const signedURL = await s3.getSignedUrlPromise('getObject', {
    //     Bucket: process.env.S3_PERSISTENCE_BUCKET,
    //     Key: objectKey,
    //     Expires: 60
    // });

    return "https://www.myinstants.com/media/sounds/untitled_1071.mp3";
}


module.exports = getS3SignedURL;