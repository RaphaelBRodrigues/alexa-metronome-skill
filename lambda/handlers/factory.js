const Alexa = require('ask-sdk-model');
const Messages = require('../constants/Messages');
const Metronome = require('../Metronome');
const IntentsHandlers = require('./Intents');
const LifeCyclesHandlers = require('./LifeCycles');

function handlersFactory() {
  const messages = new Messages();
  const metronome = new Metronome();

  const intentHandlers = new IntentsHandlers(Alexa, messages, metronome);
  const lifeCyclesHandlers = new LifeCyclesHandlers(Alexa, messages);


  return {
    lifeCyclesHandlers,
    intentHandlers
  };
}


module.exports = handlersFactory;