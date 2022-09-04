const playAudio = require("../utils/playAudio");

const Metronome = (alexa) => {
  return {
    alexa,
    bpm: 100,
    setBPM(bpm) {
      this.bpm = bpm;
    },
    play(bpm, responseBuilder) {
      this.setBPM(bpm);
    
      const audio = playAudio(responseBuilder);
    
      return audio;
    },
    stop() {
      return true;
    }
  }
}

module.exports = Metronome;