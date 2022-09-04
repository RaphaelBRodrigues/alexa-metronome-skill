const { getS3SignedURL } = require('./index')

function playAudio(responseBuilder, audio) {
  const url = getS3SignedURL(audio.s3ObjectKey);
  return url;
  // return responseBuilder.addAudioPlayerDirective("ENQUEUE", url, audio.token, audio.offsetInMilliseconds);
}

module.exports = playAudio;