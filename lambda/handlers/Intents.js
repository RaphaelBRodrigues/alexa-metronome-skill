class IntentsHandlers {
  alexa;
  messages;

  constructor(alexa, messages, metronome) {
    this.alexa = alexa;
    this.messages = messages;
    this.metronome = metronome;
  }

  openMetronome() {
    return {
      canHandle(handleInput) {
        const matchIntent = true;
        const matchRequestType = Alexa;

        return matchIntent && matchRequestType;
      },
      handle() {

      }
    }
  }
}

module.exports = IntentsHandlers;