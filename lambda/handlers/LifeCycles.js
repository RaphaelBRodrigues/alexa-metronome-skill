const LifeCyclesHandlers = (alexa, messages) => {
  const launchRequest = {
    canHandle(handlerInput) {
      return alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
      const speakOutput = messages.LAUNCH_MESSAGE + " " + messages.REQUEST_ANSWER;

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
    }
  };

  const error = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.error(error);

      return handlerInput.responseBuilder
        .speak(messages.ERROR_HANDLER)
    }
  };

  return {
    launchRequest, error
  }
}

module.exports = LifeCyclesHandlers;