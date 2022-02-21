import fs from "fs";
import path from "path";
import { Message, Whatsapp } from "venom-bot";

function openTXT(dirname: string, relativePath: string): string {
  let fullPath = path.join(dirname, relativePath);
  let raw = fs.readFileSync(fullPath, { encoding: "utf-8" });
  let data = raw.toString();

  return data;
}

export function links(message: Message, client: Whatsapp): void {
  const text: string = openTXT(__dirname, "index.txt");

  client.reply(message.chat.id, text, message.id);

  return;
}
