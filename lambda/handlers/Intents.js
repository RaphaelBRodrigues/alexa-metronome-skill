const IntentsHandlers = (alexa, messages, metronome) => {
  const startMetronome = {
     canHandle(handlerInput) {
            return alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && alexa.getIntentName(handlerInput.requestEnvelope) === 'BPMIntent';
    },
     handle(handlerInput) {
        const speakOutput = messages.SUCCESS;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
      }
  };
  
  return {
      startMetronome
  }
}

module.exports = IntentsHandlers;