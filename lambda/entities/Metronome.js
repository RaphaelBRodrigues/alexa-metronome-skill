const { playAudio } = require("../utils");
const { Sound } = require("../constants/Resources")

const Metronome = () => {
  return {
    bpm: 100,
    setBPM(bpm) {
      this.bpm = bpm;
    },
    async play(bpm, responseBuilder) {
      this.setBPM(bpm);

       const tic = await playAudio(responseBuilder, Sound.tic);
       const tac = await playAudio(responseBuilder, Sound.tac);

      return true;
    },
    stop() {
      return true;
    }
  }
}

module.exports = Metronome;