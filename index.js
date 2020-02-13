const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = '!';
const SUFIX = 'pls ';
const {
    Client,
    RichEmbed
} = require('discord.js');
bot.login(process.env.token);
bot.on('ready', () => {
    console.log('This bot  is online');
})

bot.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '!juresult') {
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
        case 'sem1':
            var sem1Channel = bot.channels.get("677547196341551114")
            const localFileAttachment = new Discord.Attachment('ju.pdf')
            sem1Channel.send(localFileAttachment)
            break;
        case 'help':
                const embed = new RichEmbed()
                    // Set the title of the field
                    .setTitle('How can we help you')
                    // Set the color of the embed
                    .setColor(0Xff8384)
                    // Set the main content of the embed
                    .setDescription('Try using commands like !juresult,!sem1')
                // Send the embed to the same channel as the message
                message.channel.send(embed)
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