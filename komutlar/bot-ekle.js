const Discord = require('discord.js');

/////FİBER CODE
exports.run = function(client, message, args) {

    let botid = args[0]
    let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "853259563875958815"// başvurunun gideceği kanal
    let kanal = "853259319905353748" // başvurunun yapılacağı kanal
  let log = "856935513474334720" // bot log kanalı
    
  if (message.channel.id !== kanal) return message.channel.send(`<:reddet:901475681035235349> **Bu Komutu Sadece <#${kanal}> Kanalında Kullanabilirsin.**`).then(m => m.delete({timeout: 5000}));
    if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`<:reddet:901475681035235349>** Botunun ID'sini yazmalısın.**`).then(m => m.delete({timeout: 5000}));
  if (!prefix) return message.channel.send(`<:reddet:901475681035235349> **Botunun prefixini yazmalısın.**`).then(m => m.delete({timeout: 5000}));
  if (!onaylımı) return message.channel.send(`<:reddet:901475681035235349>** Botunun Dbl onaylımı onu yazmalısın.**`).then(m => m.delete({timeout: 5000}));
  message.delete()
  const basvuruuu = new Discord.MessageEmbed()
  .setColor("#5865f2")
  .setDescription(`> <:botlstwait:857529552301195275>** ${message.author} Adlı Kullanıcı <@${botid}> Adlı Botu İle Başvuruda Bulundu. Botu İncelenmeyi ve Onaylanmayı Bekliyor.**`)
  const embed = new Discord.MessageEmbed()
  .setColor("#5865f2")
  .setDescription(`
●▬▬▬▬▬▬▬▬[Sahip Bilgiler]▬▬▬▬▬▬▬▬●

> **Bot Sahibi** - \`${message.author.tag}\`
> **Bot Sahibi ID** - \`${message.author.id}\`

●▬▬▬▬▬▬▬▬▬[Bot Bilgiler]▬▬▬▬▬▬▬▬▬●

> **Bot ID** - \`${botid}\`
> **Bot Prefix** - \`${prefix}\`
> **Bot Onaylımı?** - \`${onaylımı}\`
> **Bot Davet Linki** - ${`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0`}
`);
  client.channels.cache.get(basvuru).send(embed)
  client.channels.cache.get(log).send(basvuruuu)
  message.channel.send(` <:onayla:901475681010085928>** Bot Başvuru İsteğiniz Alındı.**`).then(m => m.delete({timeout: 5000}));
  }
};
////FİBER CODE
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};