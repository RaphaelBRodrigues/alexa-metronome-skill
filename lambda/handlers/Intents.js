const {
    getSlotIntentsValue
} = require('../Utils.js')

const IntentsLabels = require('../constants/Intents');

const IntentsHandlers = (alexa, messages, metronome) => {
    const startMetronome = {
        canHandle(handlerInput) {
            return alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && alexa.getIntentName(handlerInput.requestEnvelope) === IntentsLabels.INIT_METRONOME;
        },
        handle(handlerInput) {
            const bpm = getSlotIntentsValue(handlerInput, "BPM");
            const speakOutput = `Tocando a ${bpm} BPMs`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;