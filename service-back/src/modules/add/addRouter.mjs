import { Router } from "express";
import addController from "./addControllers.js";

const route = "/add";
const addRouter = Router();

addRouter.route(`${route}`).get(addController.getAll);

export default addRouter;
