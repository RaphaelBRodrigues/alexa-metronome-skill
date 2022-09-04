const AWS = require("aws-sdk");

const s3 = new AWS.S3()

async function getS3SignedURL(objectKey) {
    // const signedURL = await s3.getSignedUrlPromise('getObject', {
    //     Bucket: process.env.S3_PERSISTENCE_BUCKET,
    //     Key: objectKey,
    //     Expires: 60
    // });

    return "https://65c698eb-204d-4832-9da4-13ac96cba516-us-east-1.s3.amazonaws.com/Media/sounds/tac.mp3";
}


module.exports = getS3SignedURL;