const IntentsHandlers = (alexa, messages, metronome) => {
  const openMetronome = () => {
    return {
      canHandle(handleInput) {
        const matchIntent = true;
        const matchRequestType = this.alexa;

        return matchIntent && matchRequestType;
      },
      handle() {

      }
    }
  };
  
  return {
      openMetronome
  }
}

module.exports = IntentsHandlers;