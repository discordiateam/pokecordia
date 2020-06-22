import { Message, MessageEmbed } from "discord.js";
import { helpMap } from "../misc/cmd";

export default function help(msg: Message, arg?: string) {
    const embed = new MessageEmbed()
        .setColor("#00ff00")
        .setTitle("Ajuda")
        .setTimestamp() 

    helpMap.forEach((name, desc) => {
        embed.addField(desc,name)
    });

    return embed; 
}