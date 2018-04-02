import * as telegraf from "telegraf";
import * as ngrok from "ngrok";
import * as dotenv from "dotenv";
import { setupHandlers } from "./handlers";
dotenv.config();
// Starts the bot up and registers it with telegram
async function init() {
  // Initialise the bot
  const bot = new telegraf(process.env.BOT_TOKEN);
  bot.telegram.getMe()
    .then(() => {
      bot.options.username = process.env.BOT_NAME;
    });
  // Start ngrok if not deployed
  const url = (typeof process.env.DEVELOPMENT !== 'undefined') ? await ngrok.connect(80) : process.env.URL;
  // Set up the commands the bot will respond too
  setupHandlers(bot);
  // Set up and start the webhook
  bot.telegram.setWebhook(`${url}/${process.env.SECRET_PATH}`);
  bot.startWebhook(`/${process.env.SECRET_PATH}`, null, process.env.PORT);
  console.log("bot running");
}

init();
