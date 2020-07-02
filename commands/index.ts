import { Message, MessageEmbed } from "discord.js";
import { cmd, stringCommands } from "./dep/exportCommands";

const prefix = "p!";

type commandHandler = (msg: Message, arg?: string/*[]*/) => string | MessageEmbed | Promise<string>;

async function createCommand(msg: Message, handler: commandHandler | string, arg?: string) {
    if(typeof handler == 'string') return;
    try {
        msg.reply(await handler(msg, arg));
    } catch(err) {
        try {
        msg.reply(handler(msg, arg));
        } catch(err) {
            msg.reply('Erro ao executar comando.');
        }
    }
  
}

function getCommandAndArg(msg: Message) {
    let command: string;
    let arg: string;

    const msgContent = msg.content.substring(prefix.length, msg.content.length).split('');
   
    let verify = false;

    msgContent.forEach((char, index) => {
        if (char === ' ' && verify === false || index + 1 === msgContent.length && verify === false) {
            verify = true;
            command = msgContent.join('');
            arg = msgContent.join('');
            if (index + 1 === msgContent.length) {
                arg = '';
            } else {
                command = command.substring(0, index);
                arg = arg.substring(index + 1, msgContent.length);
            }
            return;
        }
    });

    return { command, arg };

}

export function executeCommands(msg: Message) {
    const msgPrefixVerify = msg.content.substring(0, prefix.length);

    if (msgPrefixVerify === prefix) {
        const { command, arg } = getCommandAndArg(msg);

        const verify = stringCommands.indexOf(command);

        if (verify > -1) {
            Object.entries(cmd).forEach((com, index) => {
                if (command === com[0]) {
                    createCommand(msg, com[1][0], arg);
                    return;
                }
            });
        }else {
            msg.channel.send('<@' + msg.author + '> ' + 'Esse comando não existe');
        }
    }   
} 