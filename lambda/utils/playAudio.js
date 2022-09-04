function playAudio(responseBuilder, audio) {
  return responseBuilder.addAudioPlayerDirective("ENQUEUE", process.env.S3_PERSISTENCE_BUCKET+"/"+audio.url, audio.token, audio.offsetInMilliseconds);
}

module.exports = playAudio;