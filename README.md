# Telegram Bot for ChatGPT API
This is a Node.js application that hosts a Telegram bot which communicates with the ChatGPT API. This bot allows users to interact with ChatGPT's AI language model to generate text.

## Prerequisites
Before running the application, make sure you have the following installed:

* [Node.js v14 or higher](https://nodejs.org/en/)
* npm package manager
* A Telegram bot token from BotFather
* An API key from ChatGPT

## Installation
1. Clone the repository or download the source code
2. Install dependencies by running npm install
3. Create a `.env` file in the root directory and add the following environment variables:
```makefile
# It's not language of ChatGPT answers. It's language for errors and some chat commands
LANGUAGE="en" 

#It's your PRIVATE tokens. Do not distribute them, keep them safe
OPENAI_TOKEN=""
TELEGRAM_BOT_TOKEN=""
```
4. Start the application by running `npm start`

## Usage
Once the application is running, you can interact with the bot by sending messages to it in Telegram. The bot will respond with generated text based on the user's input. To start a conversation with the bot, search for it by name in Telegram and write `/start`.

## Contributing
Contributions are welcome! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make changes and commit them
4. Push your changes to your fork
5. Submit a pull request to the main repository

## License
This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/KuzyXD/chatgpt-telegram-bot/master/LICENSE) file for details.
