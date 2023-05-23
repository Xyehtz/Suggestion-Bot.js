# Suggestion-Bot

**IMPORTANT: If you want to jump right into the code explanation you can go to**

## **INDEX**

- [What is Suggestion-Bot about?](#what-is-suggestion-bot-about)
- [How does the bot works?](#how-does-the-bot-works)
  - [/help](#help)
  - [/setup](#setup)
  - [/send-suggestions](#send-suggestions)
  - [/ping](#ping)
  - [/user-info](#user-info)
  - [/member-count](#member-count)
- [What's inside of this project?](#whats-inside-of-this-project)
  - [src](#src)
    - [index.js](#indexjs)
    - [deploy-commands.js](#deploy-commandsjs)
  - [Node_modules](#node_modules)
  - [Commands](#commands)
    - [misc](#misc)
    - [suggestionsCommands](#suggestionscommands)
    - [utility](#utility)
  - [Events](#events)
  - [Utils](#utils)
  - [Videos](#videos)
  - [Images](#images)
- [LICENSE](#license)
- [Gratitude](#gratitude)

## What is Suggestion-Bot about?

Suggestion-Bot is created with one purpose in mind, making it easier for everyone to interact between users of a server and it's staff, in this repository you'll find the source code of the bot. This bot is created with the intention of making the process of suggestions easier for both the staff of a server and the users of said server, and improving my skills using JavaScript, Node.js, Discord.js and Discord's API, it would be very nice and I would be grateful if someone leaves a constructive review of my project, my main goal is to make projects that improve the quality of using something and thus making life easier for everyone.

This bot was created using the Discord.js library and it's command and event handler

## How does the bot works?

The bot uses a series of commands to make it easier for people to create a suggestions channel and to send the suggestions, making it more comfortable and giving the user a better experience, below you'll have the list of commands with a description of each one

***If you want to use this bot on your server just click this invite link:*** https://discord.com/api/oauth2/authorize?client_id=1107790739221512254&permissions=8&scope=bot%20applications.commands

### /help

Now talking more about the bot itself. The bot as said early is focused on making the interaction between the user of a sever and the staff of said server a lot easier, so, how does this bot works? First of all, to start the bot the first thing that you want to do is type "/help", what this command will do is send an embed with all the available commands and the permissions that the member must have to use it, here's an example.

https://github.com/Xyehtz/Suggestion-Bot.js/assets/33993070/b3bdd114-6aa3-4113-b9bd-5e8dbf77d7fb

### /setup

Now that we got the embed we can see all the command and the minimum permissions that the user needs to have in order to use it. The next command and the most important is the "/setup" command, this command is the responsible of creating the suggestions channel and setting it all the permissions for a better experience, here's and example of this command.

https://github.com/Xyehtz/Suggestion-Bot.js/assets/33993070/424eaddd-e8df-4768-ab86-6ed4923371b6

As you can see this command automatically creates the suggestions channel where all the suggestions will go, added to the creation of the channel, the bot also automatically sets the permissions of the channel whit the purpose of having the best experience possible, in this case the user that used the command will be able to see the channel, send messages and view the message history, meanwhile everyone else will be able to see the channel and the message history, but won't be able to send messages and create both public and private threads. Is very important to note that to use this command the user must have the permissions to manage channels and manage the server, therefore only the people whit this permissions that are usually the owner, administrators and moderators would be able to use this command.

### /send-suggestions

This command is in charge of sending people's suggestions through the suggestions channel, for the command to work properly the user must enter two values, "text" which is the suggestion itself and "channel" where the people need to need to choose the suggestions channel, otherwise it won't work, here's two examples, one were the user successfully sends a suggestion and the other one where the user isn't able to send the suggestion because he/she didn't select the correct channel.

First lets take a look to the successful suggestion. 

https://github.com/Xyehtz/Suggestion-Bot.js/assets/33993070/9a620f8f-a134-4b3d-a440-c6c2e3702a45

Now lets take a look to the failed suggestion.

https://github.com/Xyehtz/Suggestion-Bot.js/assets/33993070/3a2ab8f3-d349-4269-b631-24ed7bdcaaf4

As you can see the bot makes sure that the suggestion is send only on the suggestions text channel, therefore avoiding the risk of people using the bot to spam other channels, and overall making a bad use of the bot and its commands

### /ping

This command show the latency of the bot, making it a simple way in which you can make sure that the bot is working without problems

![Ping command](images/pingCommand.png)

Is very important to note that this command will only work for people with "Manage channels", and "Manage server" permissions otherwise it will not work

### /user-info

This command allows users with "Manage channels", "Manage server" and "Manage members" to see basic user information, is this case the date in which the user joined and the roles that the user has.

https://github.com/Xyehtz/Suggestion-Bot.js/assets/33993070/28e93b2f-0b69-42ed-b53e-d12873978fb3

### /member-count

A very straightforward command that let's everyone knows the number of members of a server

https://github.com/Xyehtz/Suggestion-Bot.js/assets/33993070/169e9579-ea9d-4e12-9fe8-4ee8ffb8cf5a

## What's inside of this project?

This project is divided on a series of folders, this is a small summary of every folder and what you can find inside of it.

  1.  src, short of source and the most important folder of this project, inside of this folder you'll find two .js files, 'index.js', the most important file of this project where you can find the `Intents` declaration and the Discord.js command and event handler, the second file on this folder is 'deploy-commands.js', this file is in charge of iterating trough all the commands inside the command folder, converting the data of every command into .JSON file, and at the end sending a request to the Discord API to update the commands of the specified client ID
  2.  Node_modules, all the information related to the libraries and modules used on this project
  3.  commands, all the commands are inside this folder, in this case there are three sub folders
      1.  misc, inside of this folder we find the 'ping.js' command
      2.  suggestionsCommands, this folder contains the /setup and /send-suggestion commands
      3.  utility, contains /help, /server, and /user commands
  4.  events, on this folder we can find three .js files, the first one and most important is `interactionCreate.js`, the file responsible for replying when an interaction like a command or an onMessage event occurs, and console.log if any type of error occurs, the other two files are related to, first, console.log that the bot is ready and second, apply a status for the bot while it is online
  5.  utils, in this folder is found the config file which stores the most sensitive information of the bot, like the bot's TOKEN and CLIENT_ID or the GUILD_ID
  6.  videos, stores all the videos that you may have seen by now
  7.  images, all the images that you may have seen by now

**The following part is a detailed explanation of each file, if you want you can skip this part, you'll be able to find comments in all the .js files of this project that explains what happening in the code**

### src

The source folder contains the two most important files of this project and I'm going to talk about each one on this point.

#### index.js

`index.js` is not only the most important file inside the src, or source folder, it is also the most important file in the whole project, starting is all the imports of the libraries that are being used in this project.

  - Discord.js
  - fs
  - Path
  - .JSON file that contains the TOKEN and the CLIENT_ID

The first thing that we see in the `Intents` declaration, in this case we have three different intents `IntentsBitField.Flags.Guilds` allowing the bot to be able to know all the events related with the server, next is `IntentsBitField.Flags.GuildMembers` allowing the bot to know the events related to the members of the server, like when someone joins, leaves, obtains a role etc.. At last the two intents related to the messages events `IntentsBitField.Flags.GuildMessages` and the message content `IntentsBitField.Flags.MessageContent`.

Following this we have two more important parts, the command handler, both for files that aren't inside a folder and for the ones that are inside folder, starting we have the command handler for the commands outside a folder of the commands folder, this is very straightforward, what the command handler does is first, obtain the path to the command folder and there filter all the files so it will only iterate through the .js files, in the code we can see it like this,

```
const commandsPath = path.join(__dirname, '..', 'commands'); 
const commandFiles = fs 
  .readdirSync(commandsPath) 
  .filter((file) => file.endsWith('.js'));
```

When the handler is iterating through all the files it is going to check if the command has "data" and "execute" values that inside a command should look like this,

```
data example

data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Shows the bot latency')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageChannels, PermissionsBitField.Flags.ManageGuild),
```

```
execute example 

async execute(interaction) {
// Reply to the interaction with information related to the server name and the number of users
await interaction.reply(
    `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`
);
},
```

After making sure that both "data" and "execute" have a value it will be added to the command collection created at the start, if it so happens that one doesn't has a value the bot will console.log an error letting you know which command has a problem.

The second command handler is pretty much the same, but instead this handler is going to first iterate through all the sub folders inside the command folder and then iterating through all .js files inside the sub folders, this part of the command handler should look something like this,

```
const foldersPath = path.join(__dirname, '..', 'commands'); 
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'));
}
```

And like the first command handler if any command doesn't has one of the requirements it will console.log an error.

At the end of this file is the client.login function that is in charge of putting the bot online, as you may know this function needs to have the bot TOKEN

#### deploy-commands.js

The `deploy-commands.js` is very similar to the command handler inside of the `index.js` file, in this case we have some changes, the first one is that we're not going to create a new command collection, instead we're going to create a `commands` which has as a value an empty array where later all of the command names we'll be stored the next thing the file has is the same code to iterate through all the sub folders and later files of the command folder until the if statement that checks for the requirements to be true,

```
if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.` 
      );
    }
```

As you can see if the requirements are true the `commands` array that was declared at the start will now save the "data" of the command as .JSON, now with this done, we'll going to create a request to the Discord API to deploy our commands,

```
const rest = new REST().setToken(TOKEN); 

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    const data = await rest.put(Routes.applicationCommands(CLIENTID), {
      body: commands,
    });

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error); // Logs an error if there's one
  }
})();
```

Using the REST library we are able to push this commands inside the bot making use of the TOKEN and the CLIENT_ID, all of this inside of a trycatch function that will allow the bot to console.log if there is an error while deploying the commands

### Node_modules

Inside this folder is stored all of the libraries information, this project makes use of the following libraries:

  - Discord.js
  - fs
  - path

### Commands

The commands folder in this project contains a series of sub folders in which all the commands are stored, the sub folders are divided on this order:

  - misc
  - suggestionsCommands 
  - utility

Now lets go through each sub folder and each command file.

#### misc

Inside this folder we have the `ping` command, as the name says the main purpose of this command is to send the bot latency so the user can know if the bot is working properly, the permissions for this command are:

  - Manage channels
  - Manage server

This command doesn't give directly the ping because that could take a long time and Discord could just cancel de command and send an error message, so the first thing that the bot is going to do is send a message letting the user know that is calculating the ping, in the code is shown like this,

```
const sent = await interaction.reply({
      content: 'Pinging...',
      fetchReply: true,
});
```

Using the code like this allows us to later edit the reply and show the latency of the bot, looking something like this.

![Alt text](images/pingCommand.png)

#### suggestionsCommands

Inside of this folder we have the most important commands of this project, `setUp` the command that allows either the sever owner, the administrators or the moderators to create and configure the suggestions channel automatically, and `sendSuggestions.js` the command that lets everyone in a server to send a suggestion through the suggestions channel.

For the /setup command we have the following permissions, `Manage channels` and `Manage server`, this permissions are set so the only people that are able to use the command make part of the server staff. The first thing tha this command does is create the channel using the `interaction.guild.channels.create` function, inside of this is important to set the channel name, the type of channel and the permission overwrites, so it would look something like this.

```
const channel = await interaction.guild.channels.create({
        name: `${'suggestions'}`,
        type: ChannelType.GuildText,
        permissionOverwrites: [
          {

            // The user that used the command will be able to see, send messages and read the message history
            id: interaction.member.id,
            allow: [
              PermissionsBitField.Flags.ViewChannel,
              PermissionsBitField.Flags.SendMessages,
              PermissionsBitField.Flags.ReadMessageHistory,
            ],
          },
          {

            // Everyone else on the server won't be able to send messages and create public or private threads
            id: interaction.guild.roles.everyone,
            deny: [
              PermissionsBitField.Flags.SendMessages,
              PermissionsBitField.Flags.CreatePrivateThreads,
              PermissionsBitField.Flags.CreatePublicThreads,
            ],
          },
        ],
});
```

The single most important thing in this function is not only automatically creating a new channel, but also setting all the permissions so that the user has a better and easier experience with this bot, in this case everyone in the server will be allowed to see the channel an its messages history, but wont be able to send messages and create public or private threads, instead the sever staff will have all the permissions.

When all of this is done the bot sends an embed letting the user know that from now on the channel will be used only for suggestions, adding some advice if the user want to do something like changing the category of the channel.

On the other hand, in the case of /send-suggestions everyone can make use of this command in any channel of the server, for this command to properly work what the user needs to do is add a text, which in this case would be the suggestion, and the channel in which the suggestion is set to be send, in order to keep the best experience using this bot when someone tries to send a suggestions the bot is going to check the selected channel so the message can be send only in the suggestions channel, if the user chooses the wrong channel the bot will reply to the interaction with the following. 

<video src="videos/sendsuggestionsCommandFail.mp4" controls title="/send-suggestions command fail"></video>

If the user chooses the right channel the bot will reply with the following.

<video src="videos/sendsuggestionsCommand.mp4" controls title="/send-suggestions command"></video>

#### utility

In this folder are some commands that are not directly related to the bot purpose although the first one is, instead, this commands are something more of an addition so people can learn more things about the users and the server, to start, the first command is `help.js`, a command that sends an embed with all the command of the bot, giving a brief summary of what each command does, then is the `server.js` command which sends a message with the name of the server and the number of users in the server, and last but not least the `user.js` command, a command that allows the server staff to receive general information of an user, in this case the bot sends the date in which the user joined and the current roles of the user.

### Events

On this folder we can find one of the most important files of the project, `interactionCreate.js`, the file in charge of receiving an interaction, like a command, and replying to it with the correct information, the first thing that this file does is using an if statement inside of the execute function, this if statement will make sure that the interaction received is a chat input, with this the bot is making sure that the interaction is created by an user on the chat of the server, making sure that the bot won't send commands randomly, when the bot makes sure that the interaction is a chat input it is going to get the command name used in the interaction with the following declaration.

```
const command = interaction.client.commands.get(interaction.commandName);
```

With this we can declare the value of `command` as the command name used in the interaction, after the bot will search for the command with the name used on the command, if the bot doesn't find anything related to the command name given by the user the file will console.log the error with the command name used in the interaction, on the other side, when the bot finds the command matching the command given by the user it'll run the command inside of a trycatch function so if any error happens it will appear in the console.

The next two events, `ready.js` and `status.js` will happen when the bot is online, the first one will console.log that the bot is online, meanwhile, the second one will create a list of status that will change randomly in the given interval, in this case 15 minutes

### Utils

Inside of utils you'll find the config.json, the file that contains all the most important information like the CLIENT_ID, GUILD_ID and TOKEN

### Videos

The videos used inside of this README.md file

### Images

The images used inside of this README.md file

## LICENSE

This project is created under the BSD License. Consult the LICENSE.md file for more details.

## Gratitude

I want to show my gratitude and respect to all the people that make part of the Discord.js team, a group of persons that created a truly incredible library for the creation of Discord bots, also I want to show my respect to the persons running the YouTube Channel "Under Ctrl" or "notunderctrl" on GitHub, for being one the main reasons of keep on trying and creating Discord bots with his short and easy to understand videos related to the creation of Discord bots, I leave all the links related to "Under Ctrl" and "Discord.js" below.

Under Ctrl related links:

  - Under Ctrl YouTube Channel: https://www.youtube.com/@underctrl
  - Under Ctrl GitHub Profile: https://github.com/notunderctrl
  - Under Ctrl Discord Server: https://discord.underctrl.io

Discord.js related links:

  - Discord.js Website: https://discord.js.org/
  - Discord.js Guide: https://discordjs.guide/
  - Discord.js GitHub Repository: https://github.com/discordjs/discord.js
  - Discord.js GitHub Profile: https://github.com/discordjs
  - Discord.js Documentation: https://old.discordjs.dev/#/docs/discord.js/main/general/welcome
  - Discord.js Discord Server: https://discord.gg/djs
