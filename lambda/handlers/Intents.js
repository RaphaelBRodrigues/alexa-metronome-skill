const IntentsHandlers = (alexa, messages, metronome) => {
  openMetronome() {
    return {
      canHandle(handleInput) {
        const matchIntent = true;
        const matchRequestType = this.alexa;

        return matchIntent && matchRequestType;
      },
      handle() {

      }
    }
  }
  return {
      openMetronome
  }
}

module.exports = IntentsHandlers;