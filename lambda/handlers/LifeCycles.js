const Messages = require("../constants/Messages");

class LifeCyclesHandlers {
  alexa
  messages;

  constructor(alexa, messages) {
    this.alexa = alexa;
    this.messages = messages;
  }

  launchRequest() {
    return {
      canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
      },
      handle(handlerInput) {
        const speakOutput = Messages.LAUNCH_MESSAGE;

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
          .speak(Messages.ERROR_HANDLER)
      }
    }
  }
}

export default LifeCyclesHandlers;