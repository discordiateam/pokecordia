import { Message } from 'discord.js';

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

export default function search(msg: Message, arg?: string) {
    return P.getPokemonByName(arg) // with Promise
    .then((response: any) => {
        return response.name;
    })
    .catch((error: any) => {
        console.log('There was an ERROR: ', error);
        return 'Erro ao encontrar seu pokemon';
    });
};