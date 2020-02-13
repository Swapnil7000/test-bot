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
                .setDescription('Try using commands like !juresult,!sem1,!jurhythm')
            // Send the embed to the same channel as the message
            message.channel.send(embed)
            break;
        case 'Hi':
            message.reply('Hello')
            break;
        // case 'jurhythm':
        //     const embed = new RichEmbed()
        //         // Set the title of the field
        //         .setTitle('Register here for jurhythm')
        //         // Set the color of the embed
        //         .setColor(0Xff8384)
        //         // Set the main content of the embed
        //         .setDescription('JECRC UNIVERSITY is proud to announce a 3 day TECHNO CULTURAL BUSINESS FEST JU Rhythm 20 to be held on 27th - 29th February. We would be conducting all kinds of events in our fest. The fest will attract students from different colleges in and around Jaipur to showcase their talent. We invite you to participate in the BRIDGE-O-MANIA event. Registration fees is Rs 400/-  per team(online) and 400/- per team(on the spot registration  (Min 3 Max members 4/team Winning amount is worth 15k.For any queries feel free to contact :Rakesh Banjara 9079980585Email.id- rkbanjara777@gmail.comGIRISH LAKHWANI8078621603Email.id- Girishlakhwani123456@gmail.com To register kindly visit our JU RHYTJM website Link:-WWW.JU-RHYTHM.COM')

        //     // Send the embed to the same channel as the message
        //     message.channel.send(embed)
        //     break;

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