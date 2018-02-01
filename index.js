// 3rd party libraries
const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.load();

// Our own libraries


// Constants
const token = process.env.TOKEN;

// Object instantiations
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  try {
    // Send location hook (pre-empting any command)
    if (Object.prototype.hasOwnProperty.call(msg, 'location')) {
      (() => {})(); // do nothing
    }
    if (msg.text.charAt(0) === '/') {
      const command = msg.text.split(' ')[0];
      const args = msg.text.substr(command.length + 1);

      switch (command) {
        case '/start':
          // Implement welcome message
          break;
        default:
          // Implement command not found message
          break;
      }
    } else {
      // Check session
    }
  } catch (e) {
    console.log(e);
  }
});
