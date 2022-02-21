import * as venom from "venom-bot";

import { Session } from "./lib/core/session";
import { router } from "./routes";

const session = new Session(venom);

session.set("session", "coding");
session.use(router.onanymessage.bind(router));

session.init();
