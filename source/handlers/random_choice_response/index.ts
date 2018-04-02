export const RandomChoiceResponse = {
    setupHandlers: function(bot: any): void {
        bot.command('/random', trigger);
    }
};

const options = [
    "I choose one!",
    "I choose two!",
    "I choose three!"
];

function trigger(ctx: any): void {
    const choice = Math.floor(Math.random() * options.length);
    ctx.reply(options[choice]);
}
