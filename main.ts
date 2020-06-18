import { Client } from "discord.js"
import { createCommand } from "./commands";

const client = new Client();

client.on("ready", () => {
    console.log("Running...");
});

client.on("message",() => {
    
});