const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Executor#9376`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .addField("Info", `**VER:** 1.7\n`)
    .addField("Version Source Code:"`\nhttps://github.com/ExecutorBot/1.7\n Programmed in Visual Studio Code 1.36.0 Insider Edition`)
   
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}