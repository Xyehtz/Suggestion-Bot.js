const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, ChannelType, Guild, EmbedBuilder, client } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('This command will create the suggestion text channel')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageChannels, PermissionsBitField.Flags.ManageGuild),

  async execute(interaction) {
    
    try {
      const channel = await interaction.guild.channels.create({
        name: `${'suggestions'}`,
        type: ChannelType.GuildText,
        permissionOverwrites: [
          {
            id: interaction.member.id,
            allow: [
              PermissionsBitField.Flags.ViewChannel,
              PermissionsBitField.Flags.SendMessages,
              PermissionsBitField.Flags.ReadMessageHistory,
            ],
          },
          {
            id: interaction.guild.roles.everyone,
            deny: [
              PermissionsBitField.Flags.SendMessages,
              PermissionsBitField.Flags.CreatePrivateThreads,
              PermissionsBitField.Flags.CreatePublicThreads,
            ],
          },
        ],
      });

      interaction.reply(`Channel created: ${channel}`);

      const embed = new EmbedBuilder()
        .setAuthor({
          name: interaction.client.user.tag,
          iconURL: interaction.client.user.displayAvatarURL(),
        })

        .setTitle('Channel created successfully')
        .setDescription(
          `From now on, the suggestions will appear on this channel. I highly recommend that you leave this channel as it is. Changing the permissions of this channel could affect the experience of the suggestions channel.
          \n\n**If you create more roles or move this channel to a new category, make sure that only the staff and bots are allowed to send messages on this channel to have the best experience**`
        )
        .setColor('Random')

        .setFooter({
          text: `Message send by ${interaction.client.user.tag}`,
          iconURL: interaction.client.user.displayAvatarURL(),
        })

        .setTimestamp()
        .setThumbnail(
          'https://media.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif'
        );

      channel.send({embeds: [embed]});

    } catch (error) {
      console.error(error);
      interaction.reply(`Couldn't create suggestions channel`);
    }
  },
};