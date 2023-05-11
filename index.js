const express = require("express")
const app = express()
const open = require('open')

app.listen(3000, () => {
  console.log("project is okie")
})

app.get('/', (req,res) => {
  res.send("hui ui")
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})

client.on("message", message => {
  const user = message.author
  const cont = message.content

  if(cont === "ping")message.channel.send("pong")
  if(cont.substring(0,23) === "https://us04web.zoom.us" || cont.substring(0,27) === "https://teams.microsoft.com" || cont.substring(0,23) === "https://meet.google.com"){
      message.channel.send(`Thanku fr the link ${user}, I luv u`)
      open(message.content)
  }

  //commands
  if(cont=== "/slap")message.reply("https://tenor.com/view/penguin-smack-head-fall-over-gif-15860650")
  if(cont=== "/dog")message.reply("https://tenor.com/view/slap-slapping-gif-25324495")
  if(cont === "/make-me-rich")message.reply("https://cdn.discordapp.com/attachments/717367225673056297/864398321401331722/PicsArt_07-13-12.01.00.png")
  //if(message.content === "/pimp")message.reply("https://cdn.discordapp.com/attachments/859075777924694027/937580603187023882/20210616_105554.jpg")
  //if(message.content === "/pimp-rns")message.reply("https://cdn.discordapp.com/attachments/859075777924694027/937580602977320980/20210301_224357.jpg")
  //if(message.content === "/gay")message.reply("https://cdn.discordapp.com/attachments/859075777924694027/937580602666909726/PicsArt_07-14-09.46.29.jpg")

})

client.login("ODU0MzA4MjAwNjA5ODczOTMy.GYxDJq.f6LYGrGSkTe2dvPJ4RH9MbeRc2cI9r9cLCD4Bs")
