import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_TOKEN } from "./config";

// Replace with your bot token from BotFather
const token = TELEGRAM_TOKEN;

const start_bot = () => {
  // Create a bot that uses 'polling' to fetch new updates
  if (!token) return;
  try {
    const bot = new TelegramBot(token, { polling: true });

    // Listen for any kind of message. There are different kinds of messages.
    bot.on("message", (msg) => {
      const chatId = msg.chat.id;
      const response = `You said: ${msg.text}`;

      // Send a message back to the user
      bot.sendMessage(chatId, response);
    });

    // Listen for the /start command
    bot.onText(/\/start/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, "Welcome to the bot! How can I assist you?");
    });

    console.log("Bot is running...");
  } catch (error) {
    console.log(error);
  }
};

start_bot();
