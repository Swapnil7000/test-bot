const Discord=require('discord.js')
const bot=new Discord.Client()
const PREFIX='!';
const SUFIX='pls';
bot.login(process.env.token);
bot.on('ready',()=>{
    console.log('This bot  is online');
})
bot.on('message',message=>{
 let args=message.content.substring(PREFIX.length).split(" ");
 switch(args[0])
 {
     case 'help':message.channel.sendMessage('How can we help you')
     if(message.content===jusyllabus)
     {
         message.reply('See the syllabus here https://jecrcuniversity.edu.in/assets/pdf/B.Tech.%20Computer%20Secience.pdf')
     }
     break;
     case 'Hi':message.reply('Hello')
     break;

 }
})

bot.on('message',message=>{
    let argr=message.content.substring(SUFIX.length).split(" ");
    switch(argr[0])
    {
        case 'youtube':message.channel.sendMessage('https://www.youtube.com/');
        break;
        case 'Hi':message.reply('Hello')
        break;
   
    }
   })
