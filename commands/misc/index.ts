import { Message, MessageEmbed } from "discord.js";

const colorObj = {
    red: '#E21000',
    yellow: '#FFD500',
    green: '#0cff00'
};

//Get ping in miliseconds and display in embed
export function ping(msg: Message, arg?: string) {
    const ping = (msg.createdTimestamp - new Date().getTime()).toString() + 'ms';
    arg = '';
    const embed = new MessageEmbed()
    .setColor('#E21000')
    .setTitle('Pong!')
    .addField('Ping:', ping);
    
    return embed;
}  

// Get RAM usage and ping and display it in a colourful embed
export function status(msg: Message, arg?: string) {
    const used = (Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100).toString() + 'mb'; 
    const numberPing = msg.createdTimestamp - new Date().getTime();
    const ping = numberPing.toString() + 'ms';
    arg = '';
    let color: string;

    if(numberPing > 600) color = colorObj['red'];
    if(numberPing < 600 && numberPing > 300) color = colorObj['yellow'];
    if(numberPing < 300) color = colorObj['green'];


    const embed = new MessageEmbed()
    .setColor(color)
    .setTitle('Status')
    .addField('Ping:', ping)
    .addField('Memória RAM:', used);
    
    return embed;
}
