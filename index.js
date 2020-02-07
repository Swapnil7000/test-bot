const Discord=require('discord.js')
const bot=new Discord.Client()
const PREFIX='!';
const SUFFIX='pls';
bot.login(process.env.token);
bot.on('ready',()=>{
    console.log('This bot  is online');
})
let argr=message.content.substring(SUFFIX.length).split(" ");
bot.on('message',message=>{
 let args=message.content.substring(PREFIX.length).split(" ");
 switch(args[0])
 {
     case 'help':message.channel.sendMessage('How can we help you??');
     break;
     case 'Hi':message.reply('Hello')
     break;

 }
 switch(argr[0])
 {
     case 'youtube':message.reply.sendMessage('https://www.youtube.com/')
     break;
     case 'google':message.reply.sendMessage('https://www.google.com/')
     break;
 }
})
