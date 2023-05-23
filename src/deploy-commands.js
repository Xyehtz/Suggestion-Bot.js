// Import all the necessary libraries
const { REST, Routes } = require('discord.js');
const { CLIENTID, TOKEN } = require('../utils/config.json');
const fs = require('node:fs');
const path = require('node:path');

// Create an empty array with the name commands, were all the commands names will be stored
const commands = [];

// Declare the path to every folder inside the command folder 
const foldersPath = path.join(__dirname, '..', 'commands'); 
const commandFolders = fs.readdirSync(foldersPath); 

// Iterate through every folder of the command folder and filter the .js files
for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs 
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'));
  
  // Iterate through every .js file inside the folders and search if every file has "data" and "execute"
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON()); 
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.` 
      );
    }
  }
}

// Send a request to Discord's API using the REST framework to deploy all of the commands into the CLIENTID
const rest = new REST().setToken(TOKEN); 

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.` 
    );

    const data = await rest.put(
      Routes.applicationCommands(CLIENTID), 
      { body: commands }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();
