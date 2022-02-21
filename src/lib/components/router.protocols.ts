import { Whatsapp, Message } from "venom-bot";

export interface IOptions {
  message: Message;
  client: Whatsapp;
}
export interface IComponent {
  alias: string;
  template: (message: IOptions["message"], client: IOptions["client"]) => void;
}
