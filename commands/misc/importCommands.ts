import ping from './ping';
import status from './status';
import setPrefix from './setPrefix';
import help from '../util/help';
import search from '../util/search';

const cmd = { 
    ping: [ping, 'Ping!'],
    status: [status, 'Show the bot status'],
    setPrefix: [setPrefix, 'Set a new prefix for the bot'],
    search: [search, 'Search for a pokemon'],
    help: [help, 'Show this message']
}

export default cmd;