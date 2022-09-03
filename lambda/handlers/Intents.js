class IntentsHandlers {
  constructor(alexa, messages) {
    this.alexa = alexa;
    this.messages = messages;
  }

  metronome() {
    return {
      canHandle(handleInput) {
        const matchIntent = true;
        const matchRequestType = this.alexa;

        return matchIntent && matchRequestType;
      }
    }
  }
}

module.exports = IntentsHandlers;