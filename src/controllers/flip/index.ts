import { Message, Whatsapp } from "venom-bot";

export function flip(message: Message, client: Whatsapp): void {
  const number = Math.round(Math.random() * 1)
  const choice = ['Cara', 'Coroa'][number]

  client.reply(message.chat.id, choice, message.id);
}