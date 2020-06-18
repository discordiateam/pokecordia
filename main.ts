import { Client, Message } from "discord.js"
import { createCommand , cmd } from "./commands";

const client = new Client();
require('dotenv').config();

const secretTag = process.env.SECRET_TAG;

client.on("ready", () => {
    console.log("Running...");
});

client.on("message", (msg: Message) => {
    if(msg.author.bot || msg.channel.type != "text") return;

    createCommand("ping", msg, cmd.ping, "pong!");
});

client.login(secretTag);
console.log("Bot is running in discord");
