// Import the necessary libraries 
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

// Set the basic information of the command and the permissions the user will need to use it
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Shows the bot latency')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageChannels, PermissionsBitField.Flags.ManageGuild),

  // Set an early reply to the user, letting the user know that the ping is being calculated
  async execute(interaction) {
    const sent = await interaction.reply({
      content: 'Pinging...',
      fetchReply: true,
    });

    // Edit the reply with the Roundtrip latency of the bo
    interaction.editReply(
      `Roundtrip latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms`
    );
  },
};
