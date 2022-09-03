const IntentsHandlers = (alexa, messages, metronome) => {
  const openMetronome = {
     canHandle(handlerInput) {
            return alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && alexa.getIntentName(handlerInput.requestEnvelope) === 'BPMIntent';
    },
     handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
      }
  };
  
  return {
      openMetronome
  }
}

module.exports = IntentsHandlers;