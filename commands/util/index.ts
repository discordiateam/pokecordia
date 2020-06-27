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

    if (parseInt(arg) > 807) return "Sorry, but the new generation isn't disponible yet.";
    return await P.getPokemonByName(arg)
    .then((response: any) => {
        response.name = response.name[0].toUpperCase() + response.name.substring(1, response.name.length);

        const embed = new MessageEmbed()
        .setColor(mapColours(response.types[0].type.name))
        .setTitle(response.name)
        .setImage(response.sprites.front_default);

        response.stats.forEach((stat: any) => {
            embed.addField(stat.stat.name, stat.base_stat, true);
        });
        
        embed.addField("Weight", (response.weight / 10) + "KG");
        
        response.types.forEach((type: any, index: any) => {
            embed.addField('Type ' + (index+1).toString(), type.type.name, true);
        });

        return embed;
    })
    .catch((error: any) => {
        return "This pokemon doesn't exists, maybe you made a typo.";
    });
}

export function setPrefix(msg: Message, arg?: string) {return 'test'}