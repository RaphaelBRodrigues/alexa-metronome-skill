const getS3SignedURL = require('./getS3SignedURL')

async function playAudio(responseBuilder, audio) {
  const url = await getS3SignedURL(audio.s3ObjectKey);

  return responseBuilder.addAudioPlayerDirective("ENQUEUE", url, audio.token, audio.offsetInMilliseconds);
}

module.exports = playAudio;