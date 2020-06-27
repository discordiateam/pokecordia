require('dotenv').config();
import { Client, Message } from "discord.js"
import { executeCommands } from "./commands";

const client = new Client();

const secretTag = process.env.SECRET_TAG;

client.on("ready", () => {
    console.log("The bot is running in discord");
});

client.on("message", (msg: Message) => {
    if(msg.author.bot || msg.channel.type != "text" || msg.guild.id === "701124567804149770") return;
    if(msg.author.id === '367406333466509314') msg.react('🤫');
    if(msg.author.id === '367347272251604993') msg.react('😳');
    if(msg.author.id === '370185155534520320') msg.react('🤡');
    
    executeCommands(msg);
});

client.login(secretTag)
