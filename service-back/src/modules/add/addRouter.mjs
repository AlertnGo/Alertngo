import { Router } from "express";
import addController from "./addControllers.js";

const route = "/add";
const addRouter = Router();

addRouter.route(`${route}`).get(addController.getAll);
addRouter.route(`${route}`).post(addController.addAdd);

export default addRouter;
