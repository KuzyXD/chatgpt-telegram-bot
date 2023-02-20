require('dotenv').config();

const lang = require('./lang.js');
const ResponseError = require('./responseError.js');
const { Configuration, OpenAIApi } = require('openai');
const openaiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_TOKEN,
});
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

//on any text which is not command
bot.onText(/^[\w\d]+/, async (msg) => {
    let chatId = msg.chat.id;
    let chatGPTanswer = await askChatGPT(msg.text);

    bot.sendMessage(chatId, chatGPTanswer);
});

async function askChatGPT(text) {
    try {
        return await getChatGPTAnswer(text);
    } catch (error) {
        console.log(error);
        return new ResponseError(error.response.status, error).message;
    }
}

async function getChatGPTAnswer(text) {
    const openai = new OpenAIApi(openaiConfiguration);
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 2048,
    });
    ``;
    return response.data.choices[0].text;
}

//on any text which is command
bot.onText(/^\/.+/, (msg) => {
    let chatId = msg.chat.id;

    switch (msg.text) {
        case '/start':
            bot.sendMessage(chatId, lang[process.env.LANGUAGE].welcomeMessage, {
                parse_mode: 'Markdown',
            });
            break;
        default:
            bot.sendMessage(chatId, lang[process.env.LANGUAGE].commandNotFound);
            break;
    }
});
