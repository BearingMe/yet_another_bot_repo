import type { IOptions } from "./options.interface";
import type { IHandler } from "./handler.interface";

interface ISession {
  _handler: IHandler;

  _options: IOptions;

  _initialized: boolean;

  set(key: string, value: string): void;

  use(handler: IHandler): void;

  init(): void;
}

export { ISession };
