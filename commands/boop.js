const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Boop!'),
  
	async execute(interaction) {
		await interaction.reply('=w=');
	},
};
