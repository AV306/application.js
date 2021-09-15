const { SlashCommandBuilder } = require('@discordjs/builders');
const request = require('request');




module.exports = {
	data: new SlashCommandBuilder()
		.setName('psmp')
		.setDescription('get Poco SMP server info'),
  
	async execute(interaction) {
		await interaction.reply('"PLEASE\nNO\nWHY\nHELP"\n~the dev who ~tried~ to write this command');
	}
};
