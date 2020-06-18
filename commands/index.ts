import { Message } from "discord.js";
import ping from "./misc/ping";

const prefix = "p!";
const stringCommands: string[] = [
    'ping',
];

type commandHandler = (msg: Message, desc?: string) => void;

/* export function makeACommand(name: string, msg: Message, handler: commandHandler, desc?: string) {
    stringCommands.forEach(command => {

    });
} */

export function createCommand(name: string, msg: Message, handler: commandHandler, desc?: string) {
    if(msg.content === prefix + name) {
        handler(msg);
    }

    // TODO: Write desc to help
}

export const cmd = {
    ping: ping
}