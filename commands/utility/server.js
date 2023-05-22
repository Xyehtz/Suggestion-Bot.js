const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('member-count')
    .setDescription('Shows how many users are in the server'),
  async execute(interaction) {
    await interaction.reply(
      `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`
    );
  },
};
