const getS3SignedURL = require('./getS3SignedURL')

async function playAudio(responseBuilder, audios) {
  const urls = await Promise.all(audios.map(async (audio) => {
      return await getS3SignedURL(audio.s3ObjectKey)
  }));

  const audiosTag = urls.map((url) => {
      return `<audio src="https://s3.amazonaws.com/cdn.dabblelab.com/audio/one-small-step-for-man.mp3" />`; 
  }).join(" ");
  

  return audiosTag;
  //return responseBuilder.addAudioPlayerPlayDirective("REPLACE_ALL", url, audio.token, audio.offsetInMilliseconds, null);
}

module.exports = playAudio;