const { Telegraf } = require("telegraf");
const { v4: uuidV4 } = require("uuid");
require("dotenv").config();
// let factGenerator = require("./factGenerator");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  let message = `Please use the /eth or /sol command to receive a new nft`;
  ctx.reply(message);
});

bot.command("eth", async (ctx) => {
  try {
    ctx.reply("Please Input the CollectionName or Contract Address");
  } catch (error) {
    console.log("error", error);
    ctx.reply("Sorry, please again");
  }
});

bot.command("sol", async (ctx) => {
  try {
    ctx.reply("Please Input the Solana Contract Address");
  } catch (error) {
    console.log("error", error);
    ctx.reply("Sorry, please again");
  }
});

bot.launch();
