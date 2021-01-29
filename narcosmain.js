const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.ayar = require("./ayarlar.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = { 
  bilgisayar: {
    cost: 2000
  },
  galaxynote20ultra: {
    cost: 10000
  },
  iphone12: {
    cost: 25000
  },
   ipad: {
    cost: 12000
  },
  Discordboost: {
    cost: 13000
  },
  DiscordNitro: {
    cost: 10000
  },
   Minecraft: {
    cost: 10000
  },
   GTA5: {
    cost: 10000
  },
  cyberpunk2077: {
    cost: 20000
  },
  ETS2: {
    cost: 5000
  },
  FallGuys: {
    cost: 10000
  },
   Beyin: {
    cost: 1000000
  },
  
   arsa: {
  cost: 21999
     },
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./komutlar/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./komutlar/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});


client.login(client.ayar.token);
