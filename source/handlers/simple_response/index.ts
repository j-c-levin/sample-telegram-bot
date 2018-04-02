export const SimpleResponse = {
    setupHandlers: function(bot: any): void {
        bot.command('/hello', trigger);
    }
};

function trigger(ctx: any): void {
    ctx.reply('hello world!!1!');
}
