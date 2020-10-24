require("dotenv").config();
const { app } = require("./app");
const { port } = require("./constants");
const { postAsUser } = require("./postAsUser");
const moment = require("moment");

(async () => {
  await app.start(port);
  console.log("app is running on port", port);
})();

let i = 0;
let timer = null;

timer = setInterval(() => {
  if (i < 3) {
    postAsUser(`2 second interval message ${i} , you will receive 3 messages timestamp: ${moment.now()}`);
  }
  if (i === 3) {
    clearTimeout(timer);
    timer = null;
  }
  i++;
}, 2000);
