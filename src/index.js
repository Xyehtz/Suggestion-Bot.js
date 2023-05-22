// Import all the necessary libraries for the bot to work
const fs = require('node:fs');
const path = require('node:path');
const {
  Client,
  Collection,
  Events,
  GatewayIntentsBits,
  IntentsBitField,
  ActivityType,
} = require('discord.js');
const { TOKEN } = require('../utils/config.json');

// Declare the Intents of the bot
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Create the command collection, in this case for the files that aren't inside folders
client.commands = new Collection(); 

// Declare the path to the files, then search and filter every file so the only ones selected are the ones ending on .js, thus being a JavaScript file
const commandsPath = path.join(__dirname, '..', 'commands'); 
const commandFiles = fs 
  .readdirSync(commandsPath) 
  .filter((file) => file.endsWith('.js')); 

//Register the commands found and verify that every command has "data" and "execute"
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file); // Obtain the relative file path
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

// Create a command collection, in this case for every file that is inside a folder
client.commands = new Collection();

// Obtain the path to every folder inside the command folder
const foldersPath = path.join(__dirname, '..', 'commands'); 
const commandFolders = fs.readdirSync(foldersPath);

// Iterate through every folder searching for a file ending on .js, a JavaScript file
for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder); 
  const commandFiles = fs 
    .readdirSync(commandsPath) 
    .filter((file) => file.endsWith('.js')); 
  for (const file of commandFiles) {
    // Now iterate inside every .js file obtained and verifying if the "data" and "execute" values are present in every file
    const filePath = path.join(commandsPath, file); 
    const command = require(filePath); 
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command); 
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.` 
      );
    }
  }
}

// Obtain the path to the events folder, search and filter to obtain only the .js files
const eventsPath = path.join(__dirname, '..', 'events');
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'));

// Iterates through all of the events folder files and determines which one occurs only one time like console.log that the bot is online, or on when an event starts 
// when the bot is online but keeps occurring 
for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(TOKEN);
