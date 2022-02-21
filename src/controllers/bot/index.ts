import { Message, Whatsapp } from "venom-bot";
import { GREETINGS } from "./constants"

function randint(a: number, b: number): number {
  let delta = b + 1 - a;
  let rng = Math.floor(Math.random() * delta);

  return a + rng;
}

function choice(list: Array<any>): any {
  let rng = randint(0, list.length - 1);

  return list[rng];
}

export function bot(message: Message, client: Whatsapp): void {
  client.reply(message.chat.id, choice(GREETINGS), message.id);
}