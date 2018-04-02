export const ImageResponse = {
    setupHandlers: function(bot: any): void {
        bot.command('/image', trigger);
    }
};

function trigger(ctx: any): void {
    ctx.replyWithPhoto('http://via.placeholder.com/300x300');
}
