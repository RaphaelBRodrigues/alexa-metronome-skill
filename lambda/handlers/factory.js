import Alexa from 'ask-sdk-model';
import Messages from '../constants/Messages';
import Metronome from '../Metronome';
import IntentsHandlers from './Intents';
import LifeCyclesHandlers from './LifeCycles';

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