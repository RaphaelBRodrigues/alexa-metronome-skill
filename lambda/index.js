const Alexa = require('ask-sdk-core');
const IntentsLabels = require('./constants/Intents');
const Messages = require('./constants/Messages');
const RequestTypes = require('./constants/RequestTypes');
const handlersFactory = require('./handlers/factory');

// const {
//     lifeCyclesHandlers,
//     intentHandlers
// } = handlersFactory();


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        {
            canHandle(handlerInput) {
                return Alexa.getRequestType(handlerInput.requestEnvelope) === RequestTypes.LAUNCH;
            },
            handle(handlerInput) {
                const speakOutput = Messages.REQUEST_BPM;

                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            }
        }
    )
    .addErrorHandlers(
        {
            canHandle() {
                return true;
            },
            handle(handlerInput, error) {
                console.error(error);

                return handlerInput.responseBuilder
                    .speak(Messages.ERROR_HANDLER)
            }
        }
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();