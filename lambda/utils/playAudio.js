const { getS3SignedURL } = require('.')

function playAudio(responseBuilder, audio) {
  const url = getS3SignedURL(audio.s3ObjectKey);
  return responseBuilder.addAudioPlayerDirective("ENQUEUE", url, audio.token, audio.offsetInMilliseconds);
}

module.exports = playAudio;