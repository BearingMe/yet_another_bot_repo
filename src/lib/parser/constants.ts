import { IFlags } from "./constants.protocols";

function isolate(regexPattern: RegExp): RegExp {
  const start = /(?<=[\n\r\s]|^)/; // remove whitespace in front of the pattern
  const end = /(?=[\n\r\s]|$)/; // remove whitespace in the end of the pattern

  return new RegExp(start.source + regexPattern.source + end.source, "g");
}

const command = /!(\w+)/;
const flagBlank = /--(\w+)/g; // funcionando
const flagString = /--(\w+)="([^"]*)"/g; // funcionando
const flagNumber = /--(\w+)=([\d.]+)/g; // captura até mesmo pontos unicos .
const flagBoolean = /--(\w+)=(true|false)/g; // funcionando

export const flags: IFlags = {
  blank: isolate(flagBlank),
  string: isolate(flagString),
  number: isolate(flagNumber),
  boolean: isolate(flagBoolean),
};

export const alias: RegExp = isolate(command);
