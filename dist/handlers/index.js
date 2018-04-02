"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./simple_response/index");
const index_2 = require("./image_response/index");
const index_3 = require("./random_choice_response/index");
const index_4 = require("./help/index");
// Import and call 'setup handlers' on everything the bot should respond to
function setupHandlers(bot) {
    index_4.HelpResponse.setupHandlers(bot);
    index_2.ImageResponse.setupHandlers(bot);
    index_1.SimpleResponse.setupHandlers(bot);
    index_3.RandomChoiceResponse.setupHandlers(bot);
}
exports.setupHandlers = setupHandlers;
//# sourceMappingURL=index.js.map