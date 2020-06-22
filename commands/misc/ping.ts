import { Message } from "discord.js";

export default function ping(msg: Message, arg?: string) {
    const ping = (new Date().getTime() - msg.createdTimestamp).toString() + 'ms';
    arg = '';

    
    return 'Pong!\n > ' + ping;
}  
// eu criei o help pra vc?