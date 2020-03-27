const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
    let channel = member.guild.channels.find('name', '✪⳺𝗪𝗘𝗟𝗖ⓞ𝗠𝗘⳻');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | ناو : ', `${member}`)
        .addField(':microphone2: | Welcome🌹', `بەخـێربێیت بۆ سـێرڤـەرە کـەمـان, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | تـۆکـەسی ژمارە', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setImage("https://cdn.discordapp.com/attachments/679282332812967958/692923865625657384/PicsArt_03-27-05.31.53.png")
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
 
        channel.sendEmbed(embed);

     

        



});
 
 
 
client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()
 
        channel.sendEmbed(embed);
});
 
 
   
 
client.login('NjkyNTU2NzA1Nzg3MDE5Mjk1.Xn1iWA.Lk2X6i3Tip_QdtRq58tyPsZjhrA');

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(2500);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sina-.glitch.me/`);
}, 280000);
