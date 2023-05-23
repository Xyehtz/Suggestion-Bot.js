// Import the necessary libraries
const { Events } = require('discord.js');

module.exports = {
  // Set the type of event, in this case the event is an Interaction create, meaning that the code will be executed when an interaction happens
  name: Events.InteractionCreate,
  async execute(interaction) {
    // Check if the interaction is a command input, thus a user input, if not return
    if (!interaction.isChatInputCommand()) return;

    // If the interaction is a chat input then search for the command name used in the interaction
    const command = interaction.client.commands.get(interaction.commandName);

    // If theres no command with that name console log the error
    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return;
    }

    // If the command name exist run the command inside a trycatch function
    try {
      await command.execute(interaction);
    } catch (error) {
      // If an error happens, console log the command and the error
      console.error(`Error executing ${interaction.commandName}`);
      console.error(error);
    }
  },
};
