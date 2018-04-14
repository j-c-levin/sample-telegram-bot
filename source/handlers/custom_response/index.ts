export const CustomResponse = {
    setupHandlers: function (bot: any): void {
        bot.command('/your-command', simpleTrigger);
    }
};

function simpleTrigger(ctx: any): void {
    ctx.reply('your response here');
}
