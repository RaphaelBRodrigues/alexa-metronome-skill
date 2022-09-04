const playAudio = require("../utils/playAudio");
const { Sound } = require("../constants/Resources") 

const Metronome = (alexa) => {
  return {
    alexa,
    bpm: 100,
    setBPM(bpm) {
      this.bpm = bpm;
    },
    play(bpm, responseBuilder) {
      this.setBPM(bpm);
    
      const tic = playAudio(responseBuilder, Sound.tic);
      const tac = playAudio(responseBuilder, Sound.tac);

      return true;
    },
    stop() {
      return true;
    }
  }
}

module.exports = Metronome;