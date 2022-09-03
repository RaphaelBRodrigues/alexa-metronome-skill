const Alexa = require('ask-sdk-core');
const Messages = require('../constants/Messages');
const Metronome = require('../Metronome');
const IntentsHandlers = require('./Intents');
const LifeCyclesHandlers = require('./LifeCycles');

function handlersFactory() {
  const metronome = Metronome();

  const intentHandlers = IntentsHandlers(Alexa, metronome);
  const lifeCyclesHandlers = LifeCyclesHandlers(Alexa);


  return {
    lifeCyclesHandlers,
    intentHandlers
  };
}


module.exports = handlersFactory;
