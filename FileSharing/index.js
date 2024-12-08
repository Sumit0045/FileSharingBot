const { Telegraf } = require('telegraf');
const path = require('path');
const fs = require("fs");
const configs = require('../config');


const bot = new Telegraf(configs.BOT_TOKEN);


const pluginsDir = path.join(__dirname, "/plugins/");
fs.readdir(pluginsDir, (err, files) => {
  if (err) {
    console.error("Error reading plugins directory:", err);
    return;
  }
  const modules = files.filter((file) => file.endsWith(".js"));
  modules.forEach((module) => {
    const modulePath = path.join(pluginsDir, module);
    const plugin = require(modulePath);

    if (plugin) {
      console.log(`Loaded plugin module: ${module}`);
    } else {
      console.log(`Invalid plugin module: ${module}`);
    }
  });
});



// --------- Start-QuizBot ---------- //

bot.launch().then(() => {
  console.log('Bot is running...');
}).catch((err) => {
  console.error('Failed to launch Bot:', err);
});


process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));



module.exports = bot;
