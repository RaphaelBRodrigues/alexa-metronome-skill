const IntentsLabels = require('../constants/Intents.js');
const RequestTypes = require('../constants/RequestTypes.js');
const {
    getSlotIntentsValue
} = require('../utils')

const IntentsHandlers = (alexa, metronome) => {
    const startMetronome = {
        canHandle(handlerInput) {
            return alexa.getRequestType(handlerInput.requestEnvelope) === RequestTypes.INTENT
                && alexa.getIntentName(handlerInput.requestEnvelope) === IntentsLabels.INIT_METRONOME;
        },
        handle(handlerInput) {
            const bpm = getSlotIntentsValue(handlerInput, "BPM");
            const speakOutput = `Tocando a ${bpm} BPMs`;
            
            const sound = metronome.play(bpm, handlerInput.responseBuilder);

            return handlerInput.responseBuilder
                .speak(sound)
                .reprompt(speakOutput)
                .getResponse();
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;