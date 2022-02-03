const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
    let botisim = args[0]
  let sahip = args[1]
  let sebep = args.slice(2).join(" ");
  
  
  
    let log = "856935513474334720" // bot log kanalı
  const red = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`> <:reddet:901475681035235349> **<@${sahip}> Adlı Kullanıcının <@${botisim}> Adlı Botu İncelendi ve Reddedildi. Sebep :** **${sebep}**\n **Reddeden Yetkili: ${message.author}**`)
    
    if (!botisim) return message.channel.send(`<:reddet:901475681035235349> **Botun idsini yazmalısın.**`).then(m => m.delete({timeout: 5000}));
  if (!sebep) return message.channel.send(`<:reddet:901475681035235349> **Botu neden onaylamadığını yazmalısın.**`).then(m => m.delete({timeout: 5000}));
    if (!sahip) return message.channel.send(`<:reddet:901475681035235349> ** Bot Sahibi id yazman lazım.**`).then(m => m.delete({timeout: 5000}));
  message.delete()
        client.channels.cache.get(log).send(red);
        message.channel.send(`<:reddet:901475681035235349> **Botu Reddettiniz.**`).then(m => m.delete({timeout: 5000}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 3
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};
