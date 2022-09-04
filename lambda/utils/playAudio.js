function playAudio(responseBuilder, audio) {
  return responseBuilder.addAudioPlayerDirective("ENQUEUE", audio.url, audio.token, 0);
}

module.exports = playAudio;