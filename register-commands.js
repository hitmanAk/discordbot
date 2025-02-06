

import { REST,Routes } from 'discord.js'
import { config } from 'dotenv';

const commands = [
    {
        name:'hey',
        description:'Replies with hey'
    },
]

config();

const rest = new REST({version:'10'}).setToken(process.env.DISCORD_TOKEN);

console.log('1');

const register = async ()=>{
    try{
        console.log('registering..');
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
            {body:commands}
        );
        console.log("command registered");
    }
    catch (error){
        console.log(error)
    }
}
 register();