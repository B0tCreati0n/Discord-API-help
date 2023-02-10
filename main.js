const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages
  ]
});

//on ready should send B0t Creati0n's Helper
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//commands
//test
client.on("message", async message => {
  if (message.channel.type === "dm") {
    console.log(`Received a DM from ${message.author.tag}: ${message.content}`);
    if (message.content === "ping") {
      const startTime = Date.now();
      await message.channel.send("Pong!").then((msg) => {
        const endTime = Date.now();
        msg.edit(`Pong! (Response time: ${endTime - startTime}ms)`);
      });
    }
  }
});
//token: removed :)
client.login("removed :)");
