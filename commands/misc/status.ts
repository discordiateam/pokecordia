import { Message } from "discord.js"

export default function status(msg: Message, arg?: string) {
    const used = Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100; 
    const ping = (new Date().getTime() - msg.createdTimestamp).toString() + 'ms';
    arg = '';
    
    return '> Estou online!\n > Usando ' + used + 'mb de memoria ram\n > Meu ping é de ' + ping;
}