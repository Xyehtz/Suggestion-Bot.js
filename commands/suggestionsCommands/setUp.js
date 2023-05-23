// Import the necessary libraries
const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, ChannelType, Guild, EmbedBuilder, client } = require('discord.js');

module.exports = {
  // Set the basic information of the command and the permissions needed to use it
  data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('This command will create the suggestion text channel')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageChannels, PermissionsBitField.Flags.ManageGuild),

  async execute(interaction) {
    
    try {
      // Create a new channel with the name: suggestions
      const channel = await interaction.guild.channels.create({
        name: `${'suggestions'}`,
        type: ChannelType.GuildText,

        // Set the permissions for the user that used the command, in this case, view channel, send messages and read message history
        permissionOverwrites: [
          {
            id: interaction.member.id,
            allow: [
              PermissionsBitField.Flags.ViewChannel,
              PermissionsBitField.Flags.SendMessages,
              PermissionsBitField.Flags.ReadMessageHistory,
            ],
          },
          // Set the permissions for everyone else in the server, in this case the users wont be able to send messages and create private or public threads
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
      
      // Send a reply in the interaction channel letting the user know that the channel was successfully created
      interaction.reply(`Channel created: ${channel}`);

      // Send an embed to the new channel with recommendations on how to use the channel
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

    // If theres an error console log it and let the user know that something happened
    } catch (error) {
      console.error(error);
      interaction.reply(`Couldn't create suggestions channel`);
    }
  },
};