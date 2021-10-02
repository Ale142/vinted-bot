/** @type {typeof import('telegraf').Telegraf} */

require('dotenv').config();
const https = require('https');
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.TOKEN);

const regex = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i');


let savedMenu = {
    reply_markup: {
        inline_keyboard: [
            [{
                text: 'Aggiungi prodotto',
                callback_data: 'add'
            },
            {
                text: 'Info prodotto',
                callback_data: 'info'
            },
            ],
        ]
    }
}
let product_link;

function increaseVisual(n) {
    for (i = 0; i < n; i++) {
        try {
            https.get(product_link);
        } catch (error) {
            console.log(error);
        }
    }
}


bot.start((context) => {
    context.deleteMessage();
    let message = "Ciao! Questa è una list di comandi che puoi usare"
    bot.telegram.sendMessage(context.chat.id, message, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Aggiungi prodotto',
                    callback_data: 'add'
                },
                {
                    text: 'Info prodotto',
                    callback_data: 'info'
                },
                ],
            ]
        }
    })
})


bot.action('reset', context => {
    product_link = undefined;
    context.reply("Prodotto cancellato")
    savedMenu = {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Aggiungi prodotto',
                    callback_data: 'add'
                },
                {
                    text: 'Info prodotto',
                    callback_data: 'info'
                },
                ],
            ]
        }
    }
    bot.telegram.sendMessage(context.chat.id, 'Menu principale', savedMenu)
})

bot.on('text', context => {
    // Salva il link 
    if (!regex.test(context.update.message.text)) {
        savedMenu = {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Aggiungi prodotto',
                        callback_data: 'add'
                    },
                    {
                        text: 'Info prodotto',
                        callback_data: 'info'
                    },
                    ],
                ]
            }
        }
        bot.telegram.sendMessage(context.chat.id, "Inserisci un valido URL", savedMenu)
    } else {
        product_link = context.update.message.text;
        savedMenu = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '10',
                            callback_data: '10'
                        },
                        {
                            text: '20',
                            callback_data: '20'
                        },
                        {
                            text: '30',
                            callback_data: '30'
                        },
                        {
                            text: '50',
                            callback_data: '50'
                        }
                    ],
                    [{
                        text: 'Info prodotto',
                        callback_data: 'info',
                    },
                    {
                        text: 'Reset',
                        callback_data: 'reset'
                    }]
                ]
            }
        }
        bot.telegram.sendMessage(context.chat.id, "Prodotto aggiunto!", savedMenu)
    }

})

bot.action("10", context => {
    try {
        increaseVisual(10);
        savedMenu = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '10',
                            callback_data: '10'
                        },
                        {
                            text: '20',
                            callback_data: '20'
                        },
                        {
                            text: '30',
                            callback_data: '30'
                        },
                        {
                            text: '50',
                            callback_data: '50'
                        }
                    ],
                    [{
                        text: 'Info prodotto',
                        callback_data: 'info',
                    },
                    {
                        text: 'Reset',
                        callback_data: 'reset'
                    }]
                ]
            }
        }
        bot.telegram.sendMessage(context.chat.id, `Aumentato il numero di visualizzazioni di 10`, savedMenu)
    } catch (error) {
        console.log(error);
    }
})

bot.action("20", context => {
    try {
        increaseVisual(20);
        savedMenu = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '10',
                            callback_data: '10'
                        },
                        {
                            text: '20',
                            callback_data: '20'
                        },
                        {
                            text: '30',
                            callback_data: '30'
                        },
                        {
                            text: '50',
                            callback_data: '50'
                        }
                    ],
                    [{
                        text: 'Info prodotto',
                        callback_data: 'info',
                    },
                    {
                        text: 'Reset',
                        callback_data: 'reset'
                    }]
                ]
            }
        }
        bot.telegram.sendMessage(context.chat.id, `Aumentato il numero di visualizzazioni di 20`, savedMenu)
    } catch (error) {
        console.log(error);
    }
})
bot.action("30", context => {
    try {
        increaseVisual(30);
        savedMenu = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '10',
                            callback_data: '10'
                        },
                        {
                            text: '20',
                            callback_data: '20'
                        },
                        {
                            text: '30',
                            callback_data: '30'
                        },
                        {
                            text: '50',
                            callback_data: '50'
                        }
                    ],
                    [{
                        text: 'Info prodotto',
                        callback_data: 'info',
                    },
                    {
                        text: 'Reset',
                        callback_data: 'reset'
                    }]
                ]
            }
        }
        bot.telegram.sendMessage(context.chat.id, `Aumentato il numero di visualizzazioni di 30`, savedMenu)
    } catch (error) {
        console.log(error);
    }
})
bot.action("50", context => {
    try {
        increaseVisual(50);
        savedMenu = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '10',
                            callback_data: '10'
                        },
                        {
                            text: '20',
                            callback_data: '20'
                        },
                        {
                            text: '30',
                            callback_data: '30'
                        },
                        {
                            text: '50',
                            callback_data: '50'
                        }
                    ],
                    [{
                        text: 'Info prodotto',
                        callback_data: 'info',
                    },
                    {
                        text: 'Reset',
                        callback_data: 'reset'
                    }]
                ]
            }
        }
        bot.telegram.sendMessage(context.chat.id, `Aumentato il numero di visualizzazioni di 50`,)
    } catch (error) {
        console.log(error);
    }
})

bot.action('add', context => {

    context.reply("Incolla il link del prodotto nella chat")

})

bot.command('n', context => {
    if (!product_link) context.reply("Prima devi salvare un link con il comando: \\link");
    else {
        n = context.update.message.text.split(' ')[1].trim();
        for (i = 0; i < n; i++) {

            https.get(`Prodotto salvato ${product_link}`);
        }
    }
})

bot.action('info', context => {
    if (product_link === undefined) bot.telegram.sendMessage(context.chat.id, `Nessun prodotto salvato`, savedMenu)
    else
        bot.telegram.sendMessage(context.chat.id, `Prodotto aggiunto: ${product_link}`, savedMenu)

})


bot.launch();

exports.bot = functions.https.onRequest((req, res) => {
    bot.handleUpdate(req.body, res);
})