const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
  let muteEmbed = new Discord.RichEmbed()
  .setDescription("Tempmute")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Muted User", `<@${wUser.id}>`)
  .addField("Muted In", message.channel)
  .addField("Time of mute", `${ms(ms(mutetime))}`)

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(muteEmbed);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
    let unmuteEmbed = new Discord.RichEmbed()
  .setDescription("Auto-unmute")
  .setAuthor(message.author.username)
  .setColor("#00ff26")
  .addField("Muted User", `<@${wUser.id}>`)
  .addField("Muted In", message.channel)
  .addField("Time of mute", `${ms(ms(mutetime))}`)
  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(unmuteEmbed);
}, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
