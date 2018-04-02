"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpResponse = {
    setupHandlers: function (bot) {
        bot.command("/help", help);
        bot.start(help);
    }
};
function help(ctx) {
    const helpText = `
        Let me tell you what I can do:
        /help - I'll send this message again with your options
        /image - I'll send a placeholder image
        /hello - I'll say hello back
        /random - I'll pick a number between one and three`;
    ctx.reply(helpText);
}
exports.help = help;
//# sourceMappingURL=index.js.map