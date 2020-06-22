require('dotenv').config();
import { Client, Message } from "discord.js"
import { executeCommands } from "./commands";

const client = new Client();

const secretTag = process.env.SECRET_TAG;

client.on("ready", () => {
    console.log("The bot is running in discord");
});

client.on("message", (msg: Message) => {
    if(msg.author.bot || msg.channel.type != "text") return;

    executeCommands(msg);
});

client.login(secretTag)
