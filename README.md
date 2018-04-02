# sample-telegram-bot
An example telegram bot using typescript and telegraf for learning purposes.

# Installing

1) Download node and npm: https://nodejs.org/en/
2) Navigate to the root directory in a command line (with package.json)
3) Run `npm install`

## Set up environment variables
1) Create a .env file in the root directory
2) Populate it with the following fields: 
```
DEVELOPMENT=true
BOT_TOKEN=[your bot token from telegram's botfather]
PORT=80
SECRET_PATH=[some random string]
BOT_NAME=[the username of your bot on telegram]
```

## Quick launch
1) Run `npm start`
2) Beging chatting to your chatbot on telegram

# Development
Run `npm run develop` to set up the server to compile and relaunch itself automatically on any code change