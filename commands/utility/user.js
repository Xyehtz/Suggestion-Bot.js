// Import all the necessary libraries
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  // Set basic command info and permissions
  data: new SlashCommandBuilder()
    .setName('user-info')
    .setDescription('Provides information about the user')
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('Select the user that you want to know about')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(
      PermissionsBitField.Flags.ManageChannels,
      PermissionsBitField.Flags.ManageGuild,
      PermissionsBitField.Flags.ModerateMembers,
    ),

  async execute(interaction) {
    // Get the user, the users ID and then get the roles, if the user has the @everyone role is going to be ignored, and at last the join date
    const user = interaction.options.getUser('user');
    const member = interaction.guild.members.cache.get(user.id);
    const memberRole = member.roles.cache.filter((role) => role.name !== '@everyone').map((role) => `<@&${role.id}>`);
    const joinDate = member.joinedAt.toLocaleDateString();

    // Reply to the user with the information
    await interaction.reply(`${user} joined at ${joinDate}, currently has the ${memberRole} role/s`);
  },
};
