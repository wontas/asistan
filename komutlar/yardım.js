const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord-buttons');
exports.run = async (client, message, args) => {
  const anasayfaembed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle(`${message.author.username} - Tarafından İstendi`)
  .setDescription(`**Kullanıcı Komutları : <:members:893562279709257820> Butonuna Tıklayınız\n Yetkili Komutları : <:moderator:893556478257004554> Butonuna Tıklayınız\n Ana Menü : <:home:909159478597918811> Butonuna Tıklayınız\n Sil : <:cop:905504829642788964> Butonuna Tıklayınız**`)
.setColor("#5865f2")//// embed örnektir siz kendinize göre düzenleyin
  let button = new MessageButton()
            .setLabel("")
            .setStyle("red")
            .setID("yardımpatlat")
  .setEmoji("905504829642788964")
  let abutton = new MessageButton()
            .setLabel("")
            .setStyle("green")
            .setID("anasayfa")
  .setEmoji("909159478597918811")
  let kbutton = new MessageButton()
            .setLabel("")
            .setStyle("grey")
            .setID("kullanıcı")
  .setEmoji("893562279709257820")
  let ybutton = new MessageButton()
            .setLabel("")
            .setStyle("grey")
            .setID("yetkili")
  .setEmoji("893556478257004554")
  let row = new MessageActionRow()
  .addComponent(kbutton)
    .addComponent(ybutton)
   .addComponent(abutton)
   .addComponent(button)
  
  ;
        await message.channel.send({embed: anasayfaembed, component: row})
  
  client.on('clickButton', async (button) => {
      
      const kullanıcıembed = new Discord.MessageEmbed()
       .addField("**Kullanıcı Komutları**", `\na!afk = **AFK Moduna Giriş Yaparsınız** \na!avatar = **Kendinizin veya Başkasının Avatarını Atar** \na!banner = **Kendinizin veya Başkasının Bannerını Atar** \na!invites/davetlerim = **Davetlerinizi Gösterir**\na!bot-ekle = **Botliste Bot Eklersiniz**\na!başvur = **Yetkili Alıma Başvurursunuz**\na!profil = **Kendinizin veya Başkasının Profiline Bakarsınız**`)
    .setColor("#5865f2")//// embed örnektir siz kendinize göre düzenleyin
      const yetkiliembed = new Discord.MessageEmbed()
      .addField("**Yetkili Komutları **", `\na!rütbe-ekle @rol davet = **Rütbe Ekler** \na!rütbeler = **Rütbeleri Gösterir 1 Den 10'a Kadar** \na!rütbe-sıfırla = **Rütbeyi Sıfırlar** \na!davetleri-sıfırla = **Davetleri Sıfırlar** \na!top = **Lider Tablosunu Gösterir**\na!bonus-ekle = **Bonus Ekler** \na!davet-kanal #kanal = **Davet Kanalını Ayarlar** \na!davet-kanal-sıfırla = **Davet Kanalını Sıfırlar.**\na!abone = **Abone Rolü Verirsiniz**\na!bot-onayla = **Botlist Başvurulmuş Olan Botu Onaylarsınız**\na!bot-reddet = **Botlist Başvurulmuş Olan Botu Reddetersiniz**\na!sil = **Belirtilen Sayıda Mesajı Siler**\na!ticket = **Ticket Mesajını Atar**\na!butonrol = **Buton Rolü Atar**\na!butonlukayıt = **Buton Kayıtı Atar**\na!toplu-rol-al/ver = **Toplu Rol Alır Veya Verir**\na!başvuru-onay = **Yetkili ALım Başvurusunu Onaylar**\na!başvuru-reddet = **Yetkili ALım Başvurusunu Reddeder**`)
.setFooter("Birçoğu Yalnızca Owner Özeldir")
      .setColor("#5865f2")//// embed örnektir siz kendinize göre düzenleyin
      if(button.id === "yardımpatlat"){
        message.channel.messages.fetch({ around: button.message.id, limit: 1 }).then(messages => {
            messages.first().delete()
      })
      await button.reply.send('Yardım Menüsü Mesajı Silindi.', true);
      }
    if(button.id === "anasayfa"){
          message.channel.messages.fetch({ around: button.message.id, limit: 1 }).then(messages => {
              messages.first().edit('', {embed: anasayfaembed, component: row})
        })
        await button.reply.send('Ana Sayfaya Geçildi.', true);
        }
    if(button.id === "kullanıcı"){
          message.channel.messages.fetch({ around: button.message.id, limit: 1 }).then(messages => {
               messages.first().edit('', {embed: kullanıcıembed, component: row})
        })
        await button.reply.send('Kullanıcı Komutları Sayfasına Geçildi.', true);
        }
      if(button.id === "yetkili"){
          message.channel.messages.fetch({ around: button.message.id, limit: 1 }).then(messages => {
               messages.first().edit('', {embed: yetkiliembed, component: row})
        })
        await button.reply.send('Yetkili Komutları Sayfasına Geçildi.', true);
        }
             
})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  }