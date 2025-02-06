import dotenv from 'dotenv'

dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
    ],
})

try {
    client
        .login(process.env.DISCORD_TOKENS)
        .then((r) => console.log(r, 'logged'))
} catch (error) {
    console.log('Error:', error)
}

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return

    switch (interaction.commandName) {
        case 'hey':
            interaction.reply('Hey..')
            break
    }
})

// client.on('messageCreate', async (message) => {
//   console.log(message)
//   if (!message.author.bot) {
//     message.author.send(`Echo ${message.content}`)
//   }
// })
