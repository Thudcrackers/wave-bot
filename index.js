const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'process.env.TOKEN';
const PORT = process.env.PORT || 5000;
const express = require('express');

bot.on('message', function (message) {
    //console.log(message.author)
    if (message.channel == '#welcome' && message.mentions.size > 0) {
        message.react("👋");
    }
});
bot.on('ready', function () {
    console.log("Ready");
});

bot.login(TOKEN);

express().listen(PORT, () => console.log("Listening on port " + PORT))

var reqTimer = setTimeout(function wakeUp() {
    request("https://manor-lords-wave-bot.herokuapp.com", function () {
        console.log("WAKE UP DYNO");
    });
    return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);
