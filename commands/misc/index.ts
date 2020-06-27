import { Message, MessageEmbed } from "discord.js";

export function ping(msg: Message, arg?: string) {
    const ping = (msg.createdTimestamp - new Date().getTime()).toString() + 'ms';
    arg = '';
    const embed = new MessageEmbed()
    .setColor('#E21000')
    .setTitle('Pong!')
    .addField('Ping:', ping);
    
    return embed;
}  

export function status(msg: Message, arg?: string) {
    const used = (Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100).toString() + 'mb'; 
    const ping = (msg.createdTimestamp - new Date().getTime()).toString() + 'ms';
    arg = '';
    const embed = new MessageEmbed()
    .setColor('#E21000')
    .setTitle('Status')
    .addField('Ping:', ping)
    .addField('Memória RAM:', used);
    
    return embed;
}