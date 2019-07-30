const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Executor#9376`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .addField("Info", `**VER:** 1.7\n**ID**: ${message.client.user.id}\n**Prefix:** -\n**Owners**:\nmr wiskers#5831\ngereralpetrowski#3183\nRocketDogcraft#6366\n**Development Team**:\nmr wiskers#5831\ngereralpetrowski#3183\nMr.Foster#3108\nboppers#4690\nCave_Johnson#2497\nInsidiousJohny#1217\n**Update Logs:** -ver\n**Support Server**: https://discord.gg/5HA8YAZ`)
   
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
