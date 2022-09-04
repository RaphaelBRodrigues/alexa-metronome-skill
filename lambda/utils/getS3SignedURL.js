const AWS = require("aws-sdk");

const s3 = new AWS.S3({

})

function getS3SignedURL(objectKey) {
    return new Promise((resolve, reject) => {
        s3.getSignedURL("putObject", {
            Bucket: process.S3_PERSISTENCE_BUCKET,
            Key: objectKey,
            Expires: 60
        }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}


module.exports = getS3SignedURL;