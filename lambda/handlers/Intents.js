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
            .addAudioPlayerPlayDirective("ENQUEUE", "https://65c698eb-204d-4832-9da4-13ac96cba516-us-east-1.s3.us-east-1.amazonaws.com/Media/sounds/tac.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLWVhc3QtMSJIMEYCIQDEHvqfKd6Ne4wEwQGoG4n0AikRw7Ro1WkaJSsfhAoe6AIhAJfekP2vk5h5zfbNZSaule8nXbly3RcauJOWkUnl0gMWKuwCCMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDMxMTM0OTg0ODA1IgxIt9ix1BnnIAi%2Bw80qwAKllBNHvy0s8GrAyJ16tRo60TwFDQPvDzNci6MixJFNBEFBzwylV3fmaSxLVmbIKBc9S3rwlZy4Q58yg8mCUJe9cymBhxNkTY%2FZgnaNz4hoSNdhRPAm0rhiPEXQlXAReJBwxdvhsptd%2FPxNI8i%2FrzUwdPYl%2BYsmgzxIL7qfvcK79hcUBkQeWPtAzcphB3Y3D9u6JeLgf%2BaYi%2BJC1u%2FE%2FdYwVjvYmZeKiB5W3qsXgIqQqh9nWovpQWNmbkV6seo430l8qRErpBp9%2FEEBmyCS0emCXlHVbpKA3edjJ7m1pDGd1hSJmaRyXCCc6z1k9JJ6Pt22egHBsPHSQT6SKPYxUIuwQw6zkdbmxvL4Ge0E9QcWrWWUFSETWikPZh%2Bng7JkXoqc7uNLzr922wy1vADXjN4vfvUPmzwwlAN8w4F8XMKjlzDojtSYBjqGApJXxwRHS2P%2BqGw%2B29iPYhqEBERdfBdbAnsaw99ICyo3JQbClHpWFkloWdhFcPVi49o5jHYuNyFMFxcIJc7U%2Feqmot7g6viUtNVDntJNtxnpkhwoU12EBoMimMLHbwdOnmRqND2kp1Go%2FA27cx%2B0unsqz93NSNYgXk%2BrMBAleQFBDOwxLsof8H9Wzo38tXWhbUuURbd%2Fi15AF2Uk3B6O7YtxA9CTLZlY4Ks34GWm%2B5DnGmYjOVCAq5gz9J2%2FYsMXV2gUhAL0ZmkzTchjOPyp2%2Byzd26hvPTAqcD8iqovuTbP%2FdfMeHlk%2F722q1rSqJNc%2FXKPoE9GxlmLeRwYOz2Tq768%2BLnSlS8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220904T201731Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQOP6KFJSZGTV4IDY%2F20220904%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e8fac797e9361aefcae970f99c393e9049421ccca873609f997f4417f8d96149", "audio.token", 0)
            .getResponse()
        }
    };

    return {
        startMetronome
    }
}

module.exports = IntentsHandlers;