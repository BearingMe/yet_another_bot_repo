import type { Whatsapp } from "venom-bot";
import type { IHandler, IOptions } from "./session.protocols";

class Session {
  _venom: any;
  _handler: IHandler | undefined;
  _options: IOptions;
  _initialized: boolean;

  constructor(_venom: any) {
    this._venom = _venom;
    this._options = { session: "coding" };
    this._initialized = false;
  }

  initializedError(msg: string) {
    if (this._initialized) {
      throw new Error(msg);
    }
  }

  handlerError(msg: string) {
    if (!this._handler) {
      throw new Error(msg);
    }

    if (typeof this._handler !== "function") {
      throw new Error("Handler must be a function");
    }
  }

  set(key: "session", value: string) {
    this.initializedError("Set must be called before init");
    this._options[key] = value;
  }

  use(handler: IHandler) {
    this.initializedError("Use must be called before init");
    this._handler = handler;
  }

  init() {
    this.handlerError("Handler must be set before init");

    this._venom
      .create(this._options.session) // @ts-ignore
      .then((client: Whatsapp) => this._handler(client))
      .catch((error: Error) => console.log(error));

    this._initialized = true;
  }
}

export { Session };
