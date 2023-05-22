const { SlashCommandBuilder, ChannelType, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('send-suggestions')
    .setDescription('Sends a sugggestion to the suggestions channel')

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
    const message = interaction.options.getString('text');
    const channel = interaction.options.getChannel('channel');

    if (channel.name !== 'suggestions') {
      return interaction.reply(
        'You can only send the message to the suggestions channel.'
      );
    }

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