import { Router } from "express";

import { AddMoviesController } from "@modules/controller/addMoviesController";
import { FindMoviesController } from "@modules/controller/findMoviesController";

const router = Router();

const addMoviesController = new AddMoviesController();
const findMoviesController = new FindMoviesController();

router.get("/films", addMoviesController.handle);
router.get("/films/list", findMoviesController.handle);

export { router };
