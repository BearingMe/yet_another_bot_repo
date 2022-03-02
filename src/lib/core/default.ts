import type { Whatsapp } from "venom-bot";
import type { IHandler } from "./interfaces/handler.interface";
import type { IOptions } from "./interfaces/options.interface";

const DefaultOptions: IOptions = { session: "session" };

const DefaultHandler: IHandler = (client: Whatsapp): void => {};

export { DefaultHandler, DefaultOptions };
