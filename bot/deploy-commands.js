const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

// const commands1 = 
//     new SlashCommandBuilder()
//     .setName('points')
//     .setDescription('Checking points');

// const commands = 
//     new SlashCommandBuilder()
//     .setName('tictactoe')
//     .setDescription('Play a game of tic-tac-toe');

const commands = [{
    name: 'tictactoe',
    description: 'Play a game of tic tac toe'
  }, {name:'points', description: 'Scoreboard'}];

const rest = new REST({ version: '9'}).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands.map(command => command.toJSON() ) })
    .then(() => console.log('Successfullly registerd application commands.'))
    .catch(console.error);

