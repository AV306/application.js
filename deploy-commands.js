// Run only after adding new commands with `node deploy-commands.js`

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('whoami').setDescription('Check that the bot is working correctly by displaying your info.'),
	new SlashCommandBuilder().setName('psmp').setDescription('get Poco SMP server info'),
	new SlashCommandBuilder().setName('boop').setDescription('Boop!')
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();
