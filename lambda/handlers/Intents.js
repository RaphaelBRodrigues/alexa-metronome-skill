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
        async handle(handlerInput) {
            const bpm = getSlotIntentsValue(handlerInput, "BPM");
            const speakOutput = `Tocando a ${bpm} BPMs`;

            const responseBuilder = handlerInput.responseBuilder.speak(speakOutput)
            
            // const sound = await metronome.play(bpm, handlerInput.responseBuilder);
            
            return responseBuilder.getResponse()
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;