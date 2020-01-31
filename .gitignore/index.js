const discord = require('discord.js')
const bot = new discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("command: *help");
    console.log("Connectedç");
});

bot.login("NjcyNzU1NDkwODE5NjcwMDI4.XjQJog.6sBAl8PxKzbDhVyHFgo9PUUWYeM");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("liste des commande: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)")
        console.log("Commande Salut effectué")
    });
