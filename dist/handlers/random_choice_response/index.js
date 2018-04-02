"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomChoiceResponse = {
    setupHandlers: function (bot) {
        bot.command('/random', trigger);
    }
};
const options = [
    "I choose one!",
    "I choose two!",
    "I choose three!"
];
function trigger(ctx) {
    const choice = Math.floor(Math.random() * options.length);
    ctx.reply(options[choice]);
}
//# sourceMappingURL=index.js.map