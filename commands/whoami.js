const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whoami')
		.setDescription('Check that the bot is working correctly.'),
  
	async execute(interaction) {
		await interaction.reply('Application is live!');
	},
};
