import type { Whatsapp, Message } from "venom-bot";
import { IComponent, IOptions } from "./router.protocols";

class Router {
  _components: IComponent[] = [];

  subscribe(alias: IComponent["alias"], template: IComponent["template"]) {
    if (typeof template !== "function") {
      throw new Error("template must be a function");
    }

    if (!template) {
      throw new Error("template does not exist");
    }

    if (!alias) {
      throw new Error("alias does not exist");
    }

    this._components.push({ alias, template });

    return;
  }

  notify(alias: string, kwargs: IOptions) {
    console.log("Looking for component...");
    const component = this._components.find((c) => c.alias === alias);

    if (component) {
      console.log("Component found");
      component.template(kwargs.message, kwargs.client);

      return;
    }

    console.log("Component not found");
    return;
  }

  onanymessage(client: Whatsapp) {
    client.onAnyMessage((message: Message) => {
      const body = message.body;
      const alias = body.split(" ")[0];

      console.log("Trigger: onanymessage");
      
      if (alias.startsWith("!")) {
        console.log("Alias: " + alias);
        this.notify(alias, { message, client });
        console.log("Notified");
        return;
      }
    });
  }
}

export { Router };
