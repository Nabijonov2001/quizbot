const TelegramBot = require("node-telegram-bot-api");
const { token } = require("./config");
const login = require("./controller/login");
const quiz = require("./controller/quiz");
const DBConnection = require("./db/mongo");
const { User } = require("./model/User");

// database connection
DBConnection();

const bot = new TelegramBot(token, {
  polling: true,
});

bot.on("message", async (msg) => {
  try {
    const chatId = msg.chat.id;
    const text = msg.text;
    const user = await User.findOne({ id: chatId });

    if (text == "/start") {
      await login(bot, user, msg, chatId);
    } else if (text == "🔷Savollar") {
      await quiz(bot, msg, user);

      bot.sendPoll(
        chatId,
        "1-savol: O'tkan kunlarni kim yozgan",
        ["Abdulla Qodiry", "Cho'lpon", "Oybek", "Fitrat"],
        {
          type: "quiz",
          correct_option_id: 0,
        }
      );
      //   await bot.sendMessage(user.id, "Kitoblardan birini tanlang:", {
      //     reply_to_message_id: msg.message_id,
      //     reply_markup: {
      //       inline_keyboard: [
      //         [{ text: "O'tkan kunlar", callback_data: "1" }],
      //         [{ text: "O'tkan kunlar", callback_data: "1" }],
      //         [{ text: "O'tkan kunlar", callback_data: "1" }],
      //         [{ text: "O'tkan kunlar", callback_data: "1" }],
      //         [{ text: "O'tkan kunlar", callback_data: "1" }],
      //         [{ text: "O'tkan kunlar", callback_data: "1" }],
      //       ],
      //     },
      //   });
    }
  } catch (error) {
    console.log(error + "");
  }
});
