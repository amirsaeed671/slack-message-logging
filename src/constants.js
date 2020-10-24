const port = process.env.PORT || 3000;
const token = process.env.TOKEN;
const channelId = process.env.CHANNEL_ID;
const signingSecret = process.env.SIGNING_SECRET;

module.exports = { port, token, channelId, signingSecret };
