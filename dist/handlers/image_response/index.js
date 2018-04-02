"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageResponse = {
    setupHandlers: function (bot) {
        bot.command('/image', trigger);
    }
};
function trigger(ctx) {
    ctx.replyWithPhoto('http://via.placeholder.com/300x300');
}
//# sourceMappingURL=index.js.map