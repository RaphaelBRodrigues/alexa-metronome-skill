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
            const speakOutput = `<speak>Tocando a ${bpm} BPMs</speak>`;

            const responseBuilder = handlerInput.responseBuilder
            
            const sound = await metronome.play(bpm, handlerInput.responseBuilder);
            console.log({
                sound
            })
            
            return responseBuilder.speak(speakOutput + sound).getResponse()
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;