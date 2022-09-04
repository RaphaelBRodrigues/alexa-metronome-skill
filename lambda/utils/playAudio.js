const getS3SignedURL = require('./getS3SignedURL')

async function playAudio(responseBuilder, audio) {
  const url = await getS3SignedURL(audio.s3ObjectKey);
  console.log(url);
  
  return responseBuilder.addAudioPlayerPlayDirective("REPLACE_ALL", url, audio.token, audio.offsetInMilliseconds, null);
}

module.exports = playAudio;