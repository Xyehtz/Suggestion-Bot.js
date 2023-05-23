// Import the necessary libraries
const { Events } = require('discord.js');

module.exports = {
  // Set the type of event, in this case CLienReady which means that it only happens when the bot is online
  name: Events.ClientReady,
  once: true,
  execute(client) {
    // Console log that the bot is online
    console.log(`Ready!, Logged in as ${client.user.tag}`);
  },
};
