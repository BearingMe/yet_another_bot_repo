import { Whatsapp, Message } from "venom-bot";
import { ArgParser } from "../lib/parser/argparser";

export function help(message: Message, client: Whatsapp): void {
  const parser = new ArgParser(message.body);
  const { subject } = parser.getStringArguments();

  console.log(subject);

  client.sendText(message.chat.id, "show this help");

  return;
}

export function hello(message: Message, client: Whatsapp): void {
  client.sendText(message.chat.id, "hey there");

  return;
}

export function test(message: Message, client: Whatsapp): void {
  const parser = new ArgParser(message.body);
  const data = parser.getArguments();

  for (const key in data) {
    const template = `
resultado:

nome: *${key}*
valor: *${data[key]}*
tipo: *${typeof data[key]}*
    `;

    client.reply(message.chat.id, template.trim(), message.id);
  }
}
