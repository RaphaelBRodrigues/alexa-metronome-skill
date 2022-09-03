const Metronome = () => {
  return {
    bpm: 100,
    setBPM(bpm) {
      this.bpm = bpm;
    },
    play(bpm) {
      this.setBPM(bpm);

      return true;
    },
    stop() {
      return true;
    }
  }
}

module.exports = Metronome;