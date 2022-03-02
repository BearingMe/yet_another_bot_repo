import type { Whatsapp } from "venom-bot";

interface IHandler {
  (client: Whatsapp): void;
}

export { IHandler };
