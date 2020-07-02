import { Message, MessageEmbed } from "discord.js";
import { } from "redis";

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
    const ping = (msg.createdTimestamp - new Date().getTime()).toString() + 'ms';
    arg = '';
    const embed = new MessageEmbed()
    .setColor('#E21000')
    .setTitle('Status')
    .addField('Ping:', ping)
    .addField('Memória RAM:', used);
    
    return embed;
}

export function get_redis(msg: Message, arg?: string) {
       
}