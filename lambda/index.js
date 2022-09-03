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


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        lifeCyclesHandlers.launchRequest,
        intentHandlers.startMetronome,
    )
    .addErrorHandlers(
        lifeCyclesHandlers.error
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();