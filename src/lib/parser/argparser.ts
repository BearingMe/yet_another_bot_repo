import { IValue } from "./argparser.protocols";
import { flags, alias } from "./constants";

export class ArgParser {
  constructor(private input: string) {}

  private parseValue(regExp: RegExp): IValue {
    const results: IValue = {};
    const matches = this.input.matchAll(regExp);

    for (const match of Array.from(matches)) {
      const key: string = match[1];
      const value: string = match[2] ?? true;

      results[key] = value;
    }

    return results;
  }

  public getBlankArguments(): IValue {
    return this.parseValue(flags.blank);
  }

  public getStringArguments(): IValue {
    return this.parseValue(flags.string);
  }

  public getNumbersArguments(): IValue {
    const data = this.parseValue(flags.number);

    for (const key in data) {
      const value = Number(data[key]);

      isNaN(value) ? (data[key] = undefined) : (data[key] = value);
    }

    return data;
  }

  public getBooleansArguments(): IValue {
    const data = this.parseValue(flags.boolean);

    for (const key in data) {
      const value = data[key] === "true";

      data[key] = value;
    }

    return data;
  }

  public getArguments(): IValue {
    const data = {
      ...this.getBlankArguments(),
      ...this.getStringArguments(),
      ...this.getNumbersArguments(),
      ...this.getBooleansArguments(),
    };

    return data;
  }

  public getText(): string {
    const data = this.input
      .replace(alias, "")
      .replace(flags.blank, "")
      .replace(flags.string, "")
      .replace(flags.number, "")
      .replace(flags.boolean, "");

    return this.input;
  }
}
