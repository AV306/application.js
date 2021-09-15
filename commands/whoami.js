const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whoami')
		.setDescription('Check that the bot is working correctly by displaying your info.'),
  
	async execute(interaction) {
		await interaction.reply(`You are: ${interaction.user.tag}`);
	},
};
