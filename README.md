# sample-telegram-bot
An example telegram bot using typescript and telegraf for learning purposes.

# Installing

1) Download node and npm: https://nodejs.org/en/
2) Download this repository using a git client or as a zip file that you extract
3) Navigate to the root directory in a command line (with package.json)
4) Run `npm install`

## Set up environment variables
5) Create a .env file in the root directory
6) Populate it with the following fields: 
```
DEVELOPMENT=true
BOT_TOKEN=[your bot token from telegram's botfather]
PORT=80
SECRET_PATH=[some random string]
BOT_NAME=[the username of your bot on telegram]
```

## Quick launch
7) Run `npm run start`
8) Beging chatting to your chatbot on telegram

# Development
Run `npm run develop` to set up the server to compile and relaunch itself automatically on any code change

The best place to start making changes is inside the 'custom_response' handler.  Copy and paste code from the other files, experiment with how they work and what you can do with them.

Have fun!