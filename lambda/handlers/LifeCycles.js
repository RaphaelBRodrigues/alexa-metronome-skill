class LifeCyclesHandlers {
  constructor(alexa, messages) {
    this.alexa = alexa;
    this.messages = messages;
  }

  launchRequest() {
    return {
      canHandle(handlerInput) {
        return this.alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
      },
      handle(handlerInput) {
        const speakOutput = this.messages.LAUNCH_MESSAGE;

        return handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse();
      }
    }
  }
  error() {
    return {
      canHandle() {
        return true;
      },
      handle(handlerInput, error) {
        console.error(error);

        return handlerInput.responseBuilder
          .speak(this.messages.ERROR_HANDLER)
      }
    }
  }
}

module.exports = LifeCyclesHandlers;