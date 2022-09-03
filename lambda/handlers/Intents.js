const IntentsHandlers = (alexa, messages, metronome) => {
  const openMetronome = () => {
    return {
     canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MetronomoIntent';
    },
      handle() {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
      }
    }
  };
  
  return {
      openMetronome
  }
}

module.exports = IntentsHandlers;