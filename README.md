# sample-telegram-bot
An example telegram bot using typescript and telegraf for learning purposes.

# Video walkthrough
You can watch a demonstration of me setting up a bot using this guide here: https://youtu.be/8QkFOnwZXSU

# Create your bot
1) In telegram search for 'botfather' and create a new bot
2) Copy the access token that the botfather gives you

# Installing

3) Download node and npm: https://nodejs.org/en/
4) Download this repository using a git client or as a zip file that you extract
5) Navigate to the root directory in a command line (with package.json)
6) Run `npm install`

## Set up environment variables
7) Create a .env file in the root directory
8) Populate it with the following fields: 
```
BOT_TOKEN=[your bot token from telegram's botfather]
```

## Quick launch
9) Run `npm run start`
10) Beging chatting to your chatbot on telegram

# Development
Run `npm run develop` to set up the server to compile and relaunch itself automatically on any code change

The best place to start making changes is inside the 'custom_response' handler.  Copy and paste code from the other files, experiment with how they work and what you can do with them.

Have fun!