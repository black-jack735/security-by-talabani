const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ''
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` BY|🔸ARBELE🔸`, "http://twitch.tv/S-F")

let statuses = [
`Servers: ${client.guilds.size} | Users: ${client.users.size}`,
`هەموو شتێک`,
`LED UP✌`

];
});

 
client.on('guildMemberAdd', member => {
   
   let memberavatar = member.user.avatarURL
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
 
 
   member.send(embed)
});
 
 
 
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🌹⎥welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | نـــاو ： ', `${member}`)
        .addField(':nazar_amulet:  | 𝐖𝐄𝐋𝐂𝐎𝐌𝐄🌹', "**¦" + `بەخـێربێیت بۆ سـێرڤـەری             LED GAMING` + "¦**")
        .addField(':id: | ئــایــدی میــمــبــەر ：', "**⌜" + `${member.id}` + "⌟**") 
        .addField(':1234: | تـۆکـەسی ژمارە：', "**¦" + `${member.guild.memberCount}` + "¦**")
        .addField(':shield:|𝐒𝐄𝐑𝐕𝐄𝐑：', `${member.guild.name}`, true )
        .setImage("https://cdn.discordapp.com/attachments/637930050255061035/693198092513574932/20200327_234110.gif")
        .setFooter(`◢${member.guild.name}◣`)
        .setTimestamp()
 
        channel.sendEmbed(embed);

     

        



});
 
 
 
client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '🔴⎥left');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('👥|𝐍𝐀𝐌𝐄:', `${member}`)
        .addField('🗑├چــووە دەرەوە لەسێرڤـــەر┤🗑',';(')
        .addField('✶⊶⊷⊶⊷❍⊶⊷⊶⊷✶;(','⳺👋خــوات لــەگــەڵ👋⳻')
        .addField('⳺☟مــیــمــبەرەکــان ماوە⳻', `${member.guild.memberCount}` + " ڪــەس")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()
 
        channel.sendEmbed(embed);
});
 
 
   
 
client.login('NjkyOTcwMTk2MzgxNzI4Nzg5.Xn2fTw.UVRn206PuAU-VgwW4Y2FB2RfuRA');


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(2500);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://placid-tumbleweed.glitch.me/`);
}, 280000);





var i = 0;
function changeColor() {
		

  const channel = client.channels.get("693941762154299403");
  if (!channel) return console.error("The channel does not exist!");
  if(i == 0){
     channel.setName("🌹⎥w");
    i++;
     }
  if(i == 1){
     channel.setName("🌹⎥wel");
    i++;
     }
  if(i == 2){
     channel.setName("🌹⎥welco");
    i++;
     }
  if(i == 3){
     channel.setName("🌹⎥welcome"); 
    i = 0;
  }
  
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}!`);
  
    
  
  setInterval(changeColor,2500);
});
client.login("NjkyOTcwMTk2MzgxNzI4Nzg5.XoEtLg.tTOCwvJzMOG0Gd9L4QttOWPzmD8");
client.on("message", message => {
  
});
