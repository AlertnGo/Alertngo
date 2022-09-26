import { Router } from "express";
import addController from "./addControllers.js";

const route = "/add";
const addRouter = Router();

addRouter.route(`${route}`).get(addController.getAll);
addRouter.route(`${route}`).post(addController.addAdd);
addRouter.route(`${route}/message`).post(addController.sendMessage);

export default addRouter;
