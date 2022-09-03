const LifeCyclesHandlers = (alexa, messages) => {
  const launchRequest = () => {
    return {
      canHandle(handlerInput) {
        return this.alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
      },
      handle(handlerInput) {
        const speakOutput = Messages.LAUNCH_MESSAGE;

        return handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse();
      }
    }
  };
  
  const error = () => {
    return {
      canHandle() {
        return true;
      },
      handle(handlerInput, error) {
        console.error(error);

        return handlerInput.responseBuilder
          .speak(Messages.ERROR_HANDLER)
      }
    }
  };
  
  return {
      launchRequest, error
  }
}
module.exports = LifeCyclesHandlers;