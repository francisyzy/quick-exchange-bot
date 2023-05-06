import { Message } from "typegram";
import { isNumber } from "util";
import bot from "../lib/bot";

const echo = () => {
  try {
    bot.on("message", (ctx) => {
      const message = (ctx.message as Message.TextMessage).text;
      const og_num = Number(message);
      const sgd = og_num / 5.8;
      ctx.reply(sgd.toString());
    });
  } catch (error) {
    console.log(error);
  }
  bot.action("delete", (ctx) => ctx.deleteMessage());
};

export default echo;
