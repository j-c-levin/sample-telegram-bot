"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf = require("telegraf");
const ngrok = require("ngrok");
const dotenv = require("dotenv");
const handlers_1 = require("./handlers");
dotenv.config();
// Starts the bot up and registers it with telegram
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialise the bot
        const bot = new telegraf(process.env.BOT_TOKEN);
        bot.telegram.getMe()
            .then(() => {
            bot.options.username = process.env.BOT_NAME;
        });
        // Start ngrok if not deployed
        const url = (typeof process.env.DEVELOPMENT !== 'undefined') ? yield ngrok.connect(80) : process.env.URL;
        // Set up the commands the bot will respond too
        handlers_1.setupHandlers(bot);
        // Set up and start the webhook
        bot.telegram.setWebhook(`${url}/${process.env.SECRET_PATH}`);
        bot.startWebhook(`/${process.env.SECRET_PATH}`, null, process.env.PORT);
        console.log("bot running");
    });
}
init();
//# sourceMappingURL=index.js.map