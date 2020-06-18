import { Message } from "discord.js";

const prefix = "p!";

export function createCommand(name: string, desc: string, msg: Message,handler: (msg: Message) => void) {
    if(prefix + name) {
        handler(msg);
    }
}