
const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = '!';
const SUFIX = 'pls ';
bot.login(process.env.token);
bot.on('ready', () => {
    console.log('This bot  is online');
})

client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'juresult') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
        const embed = new RichEmbed()
            // Set the title of the field
            .setTitle('Check your result here')
            // Set the color of the embed
            .setColor(0Xff8384)
            // Set the main content of the embed
            .setDescription(' https://hey-deepak.github.io/Pass-Fail-Detector/');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }
});
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'help':
            message.channel.sendMessage('How can we help you?? try !jusyllabus,juresult')
            break;
        case 'jusyllabus':
            message.reply('See the syllabus here https://jecrcuniversity.edu.in/assets/pdf/B.Tech.%20Computer%20Secience.pdf')
            break;
        case 'Hi':
            message.reply('Hello')
            break;

    }
})
bot.on('message', message => {
    let argr = message.content.substring(SUFIX.length).split(" ");
    switch (argr[0]) {
        case 'youtube':
            message.channel.sendMessage('https://www.youtube.com/');
            break;
        case 'Hi':
            message.reply('Hello')
            break;

    }
})