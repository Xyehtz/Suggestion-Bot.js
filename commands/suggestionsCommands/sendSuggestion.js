// Import the necessary libraries 
const { SlashCommandBuilder, ChannelType, EmbedBuilder } = require('discord.js');

module.exports = {
  // Set the basic information of the command, in this case the command needs an input from the user, being this input the suggestion and the suggestions channel
  data: new SlashCommandBuilder()
    .setName('send-suggestions')
    .setDescription('Sends a suggestion to the suggestions channel')

    .addStringOption((option) =>
      option
        .setName('text')
        .setDescription(`What's you suggestion`)
        .setRequired(true)
    )

    .addChannelOption((option) =>
      option
        .setName('channel')
        .setDescription('Select the Suggestions channel')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    ),

  async execute(interaction) {

    // Get the text that the user send and the channel selected by the user
    const message = interaction.options.getString('text');
    const channel = interaction.options.getChannel('channel');

    // Verify that the user selected the suggestions channel
    if (channel.name !== 'suggestions') {
      return interaction.reply(
        'You can only send the message to the suggestions channel.'
      );
    }

    // Create an embed with the suggestion as the description
    const embed = new EmbedBuilder()
      .setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      })

      .setTitle('New suggestion')
      .setDescription(message)
      .setColor('Random')

      .setFooter({
        text: `Message send by ${interaction.user.tag}`,
        iconURL: interaction.user.displayAvatarURL(),
      })

      .setTimestamp();

    channel.send({embeds: [embed]});

    await interaction.reply(`The message was sent to the channel: ${channel}`);
  },
};