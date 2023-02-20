module.exports = {
    ru: {
        responseError: {
            500: 'Ошибка. Повторите свой запрос или задайте новый.',
            503: 'Ошибка. Сервис перегружен и не смог обработать ваш запрос. Повторите свой запрос или задайте новый.',
            429: 'Ошибка. Вы отправляете слишком часто запросы. Повторите свой запрос чуть позже.',
            default: 'Ошибка',
        },
        welcomeMessage:
            'Привет. Я - бот, работающий с ChatGPT с помощью публичного API от OpenAI. Разработчик им очень благодарен. Прочитать, что это такое можно здесь — [нажми сюда](https://trends.rbc.ru/trends/industry/63a192819a79478fae5762ad).\n\nЧтобы задать вопрос — напишите что-то в чат.',
        commandNotFound: 'Извини, такой команды не существует.',
    },
    en: {
        responseError: {
            500: 'Error. Repeat your request or set a new one.',
            503: 'Error. Service is overload and cannot process your request. Repeat your request or set a new one.',
            429: 'Error. You send too many requests. Repeat your request or set a new one.',
            default: 'Error',
        },
        welcomeMessage:
            'Hello. I - bot, working with ChatGPT API by OpenAI. Developer is very grateful to them. Read, what you can do here — [click here](https://openai.com/blog/chatgpt).\n\nTo set a question — write something in the chat.',
        commandNotFound: 'Sorry, this command does not exist.',
    },
};
