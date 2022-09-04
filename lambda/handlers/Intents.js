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

            // const sound = await metronome.play(bpm, handlerInput.responseBuilder);
            
            return handlerInput.responseBuilder
            .speak(speakOutput)
            .addAudioPlayerDirective("ENQUEUE", "https://65c698eb-204d-4832-9da4-13ac96cba516-us-east-1.s3.amazonaws.com/Media/sounds/tac.mp3", "audio.token", 0)
            .getResponse()
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;