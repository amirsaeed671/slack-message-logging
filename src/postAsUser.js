const { app } = require("./app");
const { token, channelId } = require("./constants");

async function postAsUser(text) {
  try {
    const result = await app.client.chat.postMessage({
      token,
      channel: channelId,
      text: text,
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { postAsUser };
