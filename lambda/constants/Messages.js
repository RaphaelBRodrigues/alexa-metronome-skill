const Messages = () => {
  const LAUNCH_MESSAGE = "Iniciando metrônomo";
  const REQUEST_ANSWER = "Diga a quantos bpms deseja tocar";
  const ERROR_HANDLER = "Algo deu errado, até mais!";

  return {
      LAUNCH_MESSAGE,
      ERROR_HANDLER,
      REQUEST_ANSWER
  }
}

module.exports = Messages;
