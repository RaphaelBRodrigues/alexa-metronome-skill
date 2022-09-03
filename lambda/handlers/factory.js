const Alexa = require('ask-sdk-model');
const Messages = require('../constants/Messages');
const Metronome = require('../Metronome');
const IntentsHandlers = require('./Intents');
const LifeCyclesHandlers = require('./LifeCycles');

function handlersFactory() {
  const messages = Messages();
  const metronome = Metronome();

  const intentHandlers = IntentsHandlers(Alexa, messages, metronome);
  const lifeCyclesHandlers = LifeCyclesHandlers(Alexa, messages);


  return {
    lifeCyclesHandlers,
    intentHandlers
  };
}


module.exports = handlersFactory;
