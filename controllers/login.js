const { User } = require("../model/User");

async function login(bot, user, msg, chatId) {
  try {
    await bot.sendMessage(
      chatId,
      `Assalomu alaykum <b>${msg.from.first_name}</b> botimizga xush kelibsiz!\n\nBotdan foydalanish haqida <b>📃Yo'riqnoma</b> bo'limidan ma'lumot olishingiz mumkin.`,
      {
        parse_mode: "HTML",
        reply_markup: {
          resize_keyboard: true,    
          keyboard: [
            [{ text: "🔷Savollar" }],
            [{ text: "📊Hisobot" }, { text: "📃Yo'riqnoma" }],
          ],
        },
      }
    );

    if (!user) {
      await User.create({
        _id: chatId,
        first_name: msg.from.first_name,
        last_name: msg.from.last_name,
        user_name: msg.from.username,
      });
    } else {
      user.step = "1";
      await user.save();
    }
  } catch (error) {
    console.log(error + "");
  }
}

module.exports = login;
