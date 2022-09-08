const getS3SignedURL = require('./getS3SignedURL')

async function playAudio(responseBuilder, audios) {
  const urls = await Promise.all(audios.map(async (audio) => {
      return await getS3SignedURL(audio.s3ObjectKey)
  }))
  
  console.log(urls);
  return responseBuilder;
  //return responseBuilder.addAudioPlayerPlayDirective("REPLACE_ALL", url, audio.token, audio.offsetInMilliseconds, null);
}

module.exports = playAudio;