import { Message, MessageEmbed } from "discord.js";
import { helpMap } from "../dep/exportCommands";
import mapColours from "./coloursMap";
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

export function help(msg: Message, arg?: string) {
    const embed = new MessageEmbed()
        .setColor("#00ff00")
        .setTitle("Ajuda")
        .setTimestamp() 

    helpMap.forEach((name, desc) => {
        embed.addField(desc,name)
    });

    return embed; 
}

export async function search(msg: Message, arg?: string) {
    arg = arg.toLowerCase();

    if (parseInt(arg) > 807) return '<@' + msg.author + '> ' + 'A nova geração ainda não está disponivel';
    return await P.getPokemonByName(arg)
    .then(async (response: any) => {
        response.name = response.name[0].toUpperCase() + response.name.substring(1, response.name.length);

        const embed = new MessageEmbed()
        .setColor(mapColours(response.types[0].type.name))
        .setTitle(response.name)
        .setImage(response.sprites.front_default);
        return embed;
    })
    .catch((error: any) => {
        return '<@' + msg.author + '> ' + 'Erro ao encontrar seu pokemon';
    });
}

export function setPrefix(msg: Message, arg?: string) {return 'test'}