const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


// Read commands
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}


// Place your client and guild ids here
const clientId = '';
const guildId = '';

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Attempting ro refresh application slash commands...');

		await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands }); // COMMENT ONLY ON PRODUCTION
		// await rest.put(Routes.applicationCommands(clientId), { body: commands }); // UNCOMMENT ONLY ON PRODUCTION

		console.log('Successfully refreshed application slash commands.');
	} catch (error) { console.error(error); }
})();


// Read events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}




client.login(token); // login
