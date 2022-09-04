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