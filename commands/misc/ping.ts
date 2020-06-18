import { Message } from "discord.js";

export default function ping(msg: Message) {
    msg.channel.send("Pong!" + ((new Date().getTime()) - msg.createdTimestamp).toString() + "ms");    
}  
