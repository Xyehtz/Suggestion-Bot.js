const { REST, Routes } = require('discord.js');
const { CLIENTID, GUILDID, TOKEN } = require('../utils/config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = []; // se declara un array dentro de la constante commands

const foldersPath = path.join(__dirname, '..', 'commands'); // se obtiene la ruta a la carpeta de comandos
const commandFolders = fs.readdirSync(foldersPath); // se lee todo lo que esta adentro de la carpeta de comandos

for (const folder of commandFolders) {
  //se vuelve a realizar el proceso de interacion, primero entre cada carpeta dentro de la carpeta de comandos
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs // se itera en cada carpeta dentro de la carpeta de comandos para poder filtrar los archivos JavaScript
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    // por cada archivo .js dentro de una carpeta dentro de la carpeta de comandos se obtiene la ruta a cada archivo .js
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      // se revisa si cada comando tiene data y execute
      commands.push(command.data.toJSON()); // si lo tiene se envia la data del comando a un archivo JSON
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.` // si los archivos no tienen data o execute se da un mensaje de error
      );
    }
  }
}

const rest = new REST().setToken(TOKEN); // se declara la constante rest que por dentro cuenta con la clase rest en la cual se coloca el TOKEN del bot

(async () => {
  // se crea una funcion asincrona trycatch
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.` // se imprime en la consola que se estan actualizando los comandos de la aplicacion
    );

    const data = await rest.put(
      // se declara la constante data en la cual rest añade lo siguiente
      Routes.applicationGuildCommands(CLIENTID, GUILDID), // una ruta para poder colocar los comandos dentro del cliente y del servidor
      { body: commands } // se determina que el cuerpo dentro de data es commands
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.` // se imprime que se recargaron los comandos con exito
    );
  } catch (error) {
    console.error(error); // se imprime un error si llego a ocurrir alguno
  }
})();
