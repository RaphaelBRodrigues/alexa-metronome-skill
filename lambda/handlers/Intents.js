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
            .addAudioPlayerPlayDirective("REPLACE_ALL",
            "https://www.myinstants.com/media/sounds/untitled_1071.mp3",
            "audio.token"
            ,
            0,
            null)
            .getResponse()
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;