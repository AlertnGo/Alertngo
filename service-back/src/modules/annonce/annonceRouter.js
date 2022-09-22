import { Router } from "express";
import annonceController from "./annonceControllers";

const route = "/annonce";
const addRouter = Router();

addRouter.route(`${route}/`).get(annonceController.getAll);

export default addRouter;
