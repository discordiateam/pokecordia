import { Client, TextChannel } from "discord.js";

class Cli {
    discord: Client;

    constructor(discord: Client) {
        this.discord = discord;
    }

    initCLI() {
        
    }
}

function send_message(client: Client, id: string, message: string) {
    const channel = client.channels.cache.get(id);
    (channel as TextChannel).send(message);
}   

export default Cli;