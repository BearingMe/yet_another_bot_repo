import { Router } from "../lib/components/router";
import { test } from "../controllers";

import { about } from "../controllers/about";
import { bot } from "../controllers/bot";
import { commands } from "../controllers/commands";
import { creator } from "../controllers/creator";
import { flip } from "../controllers/flip";
import { jokenpo } from "../controllers/jokenpo";
import { links } from "../controllers/links";

const router = new Router();

router.subscribe("!about", about);
router.subscribe("!bot", bot);
router.subscribe("!commands", commands);
router.subscribe("!creator", creator);
router.subscribe("!flip", flip);
router.subscribe("!jokenpo", jokenpo);
router.subscribe("!links", links);

router.subscribe("!test", test);

export { router };
