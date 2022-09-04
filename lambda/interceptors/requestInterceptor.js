const requestInterceptor = {
  async process(handlerInput) {
    const { attributesManager } = handlerInput;
    let sessionAttributes = attributesManager.getSessionAttributes()

    let persistentAttributes = await attributesManager.getPersistentAttributes();
    sessionAttributes = Object.assign({}, persistentAttributes, sessionAttributes);

    attributesManager.setSessionAttributes(sessionAttributes);
  }

}

module.exports = requestInterceptor;