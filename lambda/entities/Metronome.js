const playSound = require("../utils/palyAudio");

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