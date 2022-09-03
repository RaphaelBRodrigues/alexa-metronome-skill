const Messages = require("../constants/Messages");
const RequestTypes = require("../constants/RequestTypes");

const LifeCyclesHandlers = (alexa) => {
  const launchRequest = {
    canHandle(handlerInput) {
      return alexa.getRequestType(handlerInput.requestEnvelope) === RequestTypes.LAUNCH;
    },
    handle(handlerInput) {
      const speakOutput = Messages.LAUNCH_MESSAGE + " " + Messages.REQUEST_ANSWER;

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
        .speak(Messages.ERROR_HANDLER)
    }
  };

  return {
    launchRequest, error
  }
}

module.exports = LifeCyclesHandlers;