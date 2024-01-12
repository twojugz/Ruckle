// This is what has been imported into this file >>
const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

// This is where a new client has been made along with its added intents >>
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// This bot sends a message to the terminal once it's turned on >>
client.once(Events.ClientReady, readyClient => {
    console.log(`[SUCCESSFULL] ${readyClient.user.username} Is online! | In ${client.guilds.cache.size} Guild`);
    client.user.setPresence({
        activities: [{ name: `${client.guilds.cache.size} guild!`, type: ActivityType.Watching }],
        status: 'dnd',
    });
});

// This is where the bot logs in >>
client.login(token);
