const { App, LogLevel } = require("@slack/bolt");
const { token, signingSecret } = require("./constants");

const app = new App({
  token,
  signingSecret,
  logLevel: LogLevel.DEBUG,
});

module.exports = { app };
