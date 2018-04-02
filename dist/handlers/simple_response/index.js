"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleResponse = {
    setupHandlers: function (bot) {
        bot.command('/hello', trigger);
    }
};
function trigger(ctx) {
    ctx.reply('hello world!!1!');
}
//# sourceMappingURL=index.js.map