import { ping, status } from '../misc';
import { help, search, setPrefix } from '../util';

const stringCommands: string[] = [];
const helpMap = new Map<string, string>();
const cmd = { 
    help: [help, 'Show this message'],
    ping: [ping, 'Ping!'],
    status: [status, 'Show the bot status'],
    setPrefix: [setPrefix, 'Set a new prefix for the bot'],
    search: [search, 'Search for a pokemon']
}

Object.entries(cmd).forEach(entry => {
    stringCommands.push(entry[0]);
    helpMap.set(entry[0], entry[1][1].toString()); 
});

export { cmd, stringCommands, helpMap }; 