const AWS = require('aws-sdk');

async function getS3Object(s3ObjectKey) {
    const s3 = new AWS.S3();

    const params = {
        Bucket: process.env.S3_PERSISTENCE_BUCKET, // Pega Bucket name da constante do ambiente.
        Key: s3ObjectKey // Caminho para pegar o arquivo TXT.
    }
    
    return await s3.getObject(params, (data, error) => {
        // Em caso de erro, não faça nada. Apenas retorne o erro.
        if (error) {
            return error;
        }
    }).promise();
}

module.exports = {
    getS3Object
}