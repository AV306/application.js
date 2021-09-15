const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  
	// Set a new item in the Collection of commands
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}



client.once('ready', () => {console.log("Ready!");}); // print "Ready!" once bot is ready

// on interact...
client.on('interactionCreate', async interaction => {
	// Log interaction
	console.log('${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.');
	
	
	
	// Handle interation
	if (!interaction.isCommand()) return; // if it's not a command, ignore
	const command = client.commands.get(interaction.commandName); // get the command from Collection
	if (!command) return; // ignore if its not a valid command
	try {
		await command.execute(interaction); // await execution of response
	} 
    catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
	
});


client.login(token); // login
