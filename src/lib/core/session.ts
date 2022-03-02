import { throwError } from "../utils/errors";
import { DefaultHandler, DefaultOptions } from "./default";

import type { Whatsapp } from "venom-bot";
import type { ISession } from "./interfaces/session.interface";
import type { IHandler } from "./interfaces/handler.interface";
import type { IOptions } from "./interfaces/options.interface";

class Session implements ISession {
  _handler: IHandler = DefaultHandler;
  _options: IOptions = DefaultOptions;
  _initialized: boolean;

  constructor(private venom: any) {
    this._initialized = false;
  }

  set(key: "session", value: string) {
    this._initialized
      ? throwError("Options must be set before init")
      : (this._options[key] = value);
  }

  use(handler: IHandler): void {
    this._initialized
      ? throwError("Handler must be used before init")
      : (this._handler = handler);
  }

  init() {
    this.venom
      .create(this._options.session)
      .then((client: Whatsapp) => this._handler(client))
      .catch((error: Error) => console.log(error));

    this._initialized = true;
  }
}

export { Session };
