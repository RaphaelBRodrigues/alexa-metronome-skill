const getS3SignedURL = require('./getS3SignedURL')

async function playAudio(responseBuilder, audio) {
  const url = "https://www.myinstants.com/media/sounds/untitled_1071.mp3" || await getS3SignedURL(audio.s3ObjectKey);

  return responseBuilder.addAudioPlayerPlayDirective("ENQUEUE", url, audio.token, audio.offsetInMilliseconds);
}

module.exports = playAudio;