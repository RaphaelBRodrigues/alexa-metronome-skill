const Alexa = require('ask-sdk-core');
const handlersFactory = require('./handlers/factory');
// const { requestInterceptor, responseInterceptor } = require('./interceptors');

const {
    lifeCyclesHandlers,
    intentHandlers
} = handlersFactory();


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        lifeCyclesHandlers.launchRequest,
        intentHandlers.startMetronome,
    )
    // .addRequestInterceptors(requestInterceptor)
    // .addResponseInterceptors(responseInterceptor)
    .addErrorHandlers(
        lifeCyclesHandlers.error
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();