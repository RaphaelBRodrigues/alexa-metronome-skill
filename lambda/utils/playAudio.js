function playAudio(responseBuilder, audio) {
  return responseBuilder.addAudioPlayerDirective("ENQUEUE", audio.url, audio.token, audio.offsetInMilliseconds);
}

module.exports = playAudio;