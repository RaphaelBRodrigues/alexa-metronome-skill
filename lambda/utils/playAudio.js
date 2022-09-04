function playAudio(responseBuilder, audio) {
  return responseBuilder.speak(process.env.S3_PERSISTENCE_BUCKET+"/"+audio.s3path)
  return responseBuilder.addAudioPlayerDirective("ENQUEUE", process.env.S3_PERSISTENCE_BUCKET+"/"+audio.s3path, audio.token, audio.offsetInMilliseconds);
}

module.exports = playAudio;