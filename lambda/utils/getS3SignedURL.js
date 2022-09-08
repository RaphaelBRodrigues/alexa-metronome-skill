const AWS = require("aws-sdk");
const Alexa = require('ask-sdk-core');

const s3 = new AWS.S3({
    signatureVersion: 'v4'
})

async function getS3SignedURL(objectKey) {
    const signedURL = await s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.S3_PERSISTENCE_BUCKET,
        Key: objectKey,
        Expires: 60*1
    });
    
    const escapedURL = Alexa.escapeXmlCharacters(signedURL); 

    console.log({
        escapedURL, 
        signedURL
    })
    return escapedURL;
}


module.exports = getS3SignedURL;