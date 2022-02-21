import { Message, Whatsapp } from "venom-bot";

export function jokenpo(message: Message, client: Whatsapp): void {
  const number = Math.round(Math.random() * 2)
  const choice = ['Pedra', 'Papel', "Tesoura"][number]

  client.reply(message.chat.id, choice, message.id);
}