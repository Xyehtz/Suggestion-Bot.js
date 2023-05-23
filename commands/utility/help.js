// Import all the necessary libraries
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  // Set the basic info of the command
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Sends an embed with all the commands'),

  async execute(interaction) {
    // Create an embed with all the commands an a brief summary of what each command does
    const embed = new EmbedBuilder()
      .setAuthor({
        name: interaction.client.user.tag,
        iconURL: interaction.client.user.displayAvatarURL(),
      })

      .setTitle('Command list')
      .setDescription(
        `These are the commands of ${interaction.client.user.tag}.\n
      **/setup**: This command will create a suggestions channel where all the suggestions will be send, to use this command make sure that you have the following permissions:\n
            ㅤ- **Manage Channels**
            ㅤ- **Manage Server**\n
      **/send-suggestions**: This command allows the person to send a suggestion to the suggestions channel, make sure to select the suggestions channel for this command to work.\n
      **/ping**: Sends the latency of the bot, this commands lets you know if the bot is working, you need the following permissions to use this command.\n
            ㅤ- **Manage Channels**
            ㅤ- **Manage server**\n
      **/user-info**: Gives information related to the join date and roles of the user that you select, to use this command make sure you have the following permissions:\n
            ㅤ- **Manage Channels**
            ㅤ- **Manage Server**
            ㅤ- **Manage Members**\n
      **/member-count**: Lets you know how many users are in the server.\n`
      )
      .setColor('Random')
      .setTimestamp()

      .setFooter({
        text: `Message send by ${interaction.client.user.tag}`,
        iconURL: interaction.client.user.displayAvatarURL(),
      });
    // Send the embed on the interaction channel
    await interaction.reply({embeds: [embed]});
  }
};
