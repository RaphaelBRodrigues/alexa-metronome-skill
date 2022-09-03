const Messages = () => {
  const LAUNCH_MESSAGE = () => "Olá, a quantos BPM você gostaria de tocar?";
  const ERROR_HANDLER = () => "Até mais!";

  return {
      LAUNCH_MESSAGE,
      ERROR_HANDLER,
      SUCCESS
  }
}

module.exports = Messages;
