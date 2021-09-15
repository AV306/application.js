module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`We have successfully logged in as ${client.user.tag}!`);
	},
};
