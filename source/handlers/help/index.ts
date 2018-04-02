export const HelpResponse = {
    setupHandlers: function (bot: any) {
        bot.command("/help", help);
        bot.start(help);
    }
};

export function help(ctx) {
    const helpText = `
        Let me tell you what I can do:
        /help - I'll send this message again with your options
        /image - I'll send a placeholder image
        /hello - I'll say hello back
        /random - I'll pick a number between one and three`;
    ctx.reply(helpText);
}
