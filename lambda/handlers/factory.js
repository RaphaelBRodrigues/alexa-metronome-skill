/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const handlersFactory = require('./handlers/factory');

const {
    lifeCyclesHandlers,
    intentHandlers
} = handlersFactory();

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        console.log({ handlerInput })
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MetronomoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        lifeCyclesHandlers.launchRequest,
        intentHandlers.openMetronome,
    )
    .addErrorHandlers(
        lifeCyclesHandlers.error
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();