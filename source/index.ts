import * as telegraf from "telegraf";
import * as ngrok from "ngrok";
import * as dotenv from "dotenv";
import { setupHandlers } from "./handlers";
dotenv.config();
// Starts the bot up and registers it with telegram
async function init() {
  // Initialise the bot
  const bot = new telegraf(process.env.BOT_TOKEN);
  // Start ngrok if not deployed
  const url = await ngrok.connect(80);
  // Set up the commands the bot will respond too
  setupHandlers(bot);
  // Set up and start the webhook
  bot.telegram.setWebhook(`${url}/secretpathhere`);
  bot.startWebhook(`/secretpathhere`, null, 80);
  console.log("bot running");
}

init();
