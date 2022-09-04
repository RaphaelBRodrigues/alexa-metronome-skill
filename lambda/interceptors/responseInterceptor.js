const responseInterceptor = {
  async process(handlerInput) {
    let {
      attributesManager
    } = handlerInput;
    let sessionAttributes = attributesManager.getSessionAttributes();
    let persistentAtttributes = await attributesManager.getPersistentAttributes();

    sessionAttributes = Object.assign({}, persistentAtttributes, sessionAttributes)

    attributesManager.setPersistentAttributes(sessionAttributes);
    await attributesManager.savePersistentAttributes();

    return handlerInput.responseBuilder.getResponse();
  }
}

module.exports = responseInterceptor;