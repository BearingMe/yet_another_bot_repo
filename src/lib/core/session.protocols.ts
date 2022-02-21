import type { Whatsapp } from "venom-bot";

export interface IOptions {
  [key: string]: any;
  session?: string;
}

export interface IHandler {
  (client: Whatsapp): void;
}
