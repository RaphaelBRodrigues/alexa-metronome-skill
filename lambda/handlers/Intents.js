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
            "https://65c698eb-204d-4832-9da4-13ac96cba516-us-east-1.s3.us-east-1.amazonaws.com/Media/sounds/tac.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLWVhc3QtMSJIMEYCIQD%2Baji5Jxwhy8XXWUP%2F%2FLoo0M65dF%2BixDbVZyZnQtTZ1AIhAK%2Fcv1hDtAwTBDLdSCwf%2F%2BOvCudjkIqZIeBlgQIbH9yZKuwCCMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDMxMTM0OTg0ODA1IgzXo5R3GR6PZ75wvNUqwAL94cBW1fCCw1L3Z4iruMynuD%2BkRHiechf6lbXQluH3ctzDgkLPxTYuCO7cFFx%2F8%2FzlCfTmGltD%2Fy8M2hFWXVbdJPj8QYZuxnEDnLRm4O%2BLLR14hS5OsoRDBxTdOTUtaFOZYwM2JkNHg3LgjgEylW%2Fp9QVq%2BcSeom4kFtuEKToWcTz20AbjWPIAolQ7u2qAXY2oqr7Wr7e%2FMbSQDvdLfqbfh7uBFbhOdGnXuz1PhKy5Qv1nMsYHsbDSBNqctxkGEeU67peZ2H470KODM4R5Kqzf0YveDbAWH6XBDzisOoC7duYqEm4%2F9laOAEq6XAZotsetYyF%2FuApVm6rYmTTnOBrpm2GrFtc0UEu0WyvWFP%2F5NflvZ1307UXrLvRK9aGkctnQNBWYNkE5FDosECqJ8rEJ3XT%2FbtNv4Kvh28zsy2QlJzDXm9SYBjqGArwAr9GS3uZ7eafXxmLbtCOOruCg08PtCBVpV2sbIW6kpA3CrdtOTsm3AkZI487bZ90uFRZfazSY0OQOWKR65GTCWE%2BcKp0zg%2BJwvHCHHtLDpwV9dyZKXNHdi8x3H2Mz8PQQKsBH9clJkD3Y8GYFpyk8bgyEjtc6Q2k8MwYqeKAT9tWt85H%2F4yyw1Yn15hcqYxQqJILZObb6zG7RkW3c1MY362P48ugMl5PZMfCYaYBk831fiYXfcGEgzD%2BjGeQevfCf5uwKRM4HP33QbOfzkcRsc6hK8z6mjP5nThwOsfUqmFSGAeaR8jwxeLuw5TtSXuOwP38rXtXFjkNtmeQs%2FTUS1O8C3P8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220904T204316Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQOP6KFJSQ25XZS7X%2F20220904%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ffae9d8408f84bd7016d99357441e6537ed9d686d3d079a43aa617638bd9c69",
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