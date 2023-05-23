// Import all the necessary files
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  // Set the basic info of the command
  data: new SlashCommandBuilder()
    .setName('member-count')
    .setDescription('Shows how many users are in the server'),
  async execute(interaction) {
    // Send a reply with the server name an the member count
    await interaction.reply(
      `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`
    );
  },
};
