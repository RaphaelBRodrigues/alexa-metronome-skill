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

            const responseBuilder = handlerInput.responseBuilder;
            
            const sound = await metronome.play(bpm, handlerInput.responseBuilder);
            
            const speakOutput = `<speak>Tocando a ${bpm} BPMs, ${sound}</speak>`;

            return responseBuilder.speak(speakOutput).getResponse()
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;