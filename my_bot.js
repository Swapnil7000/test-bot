const Discord=require('discord.js')
const bot=new Discord.Client()
const PREFIX='!';
bot.login(process.env.token);
bot.on('ready',()=>{
    console.log('This bot  is online');
})
bot.on('message',message=>{
 let args=message.content.substring(PREFIX.length).split(" ");
 switch(args[0])
 {
     case 'help':message.channel.sendMessage('How can we help you');
     break;
     case 'Hi':message.reply('Hello')
     break;

 }
})
