const { playAudios } = require("../utils");
const { Sounds } = require("../constants/Resources")

const Metronome = () => {
  return {
    bpm: 100,
    setBPM(bpm) {
      this.bpm = bpm;
    },
    async play(bpm, responseBuilder) {
      this.setBPM(bpm);

      const soundPattern = [Sounds.tac, Sounds.tic, Sounds.tic, Sounds.tic];
      console.log({
          soundPattern
      })
      const audio = await playAudios(responseBuilder, soundPattern);

      return true;
    },
    stop() {
      return true;
    }
  }
}

module.exports = Metronome;