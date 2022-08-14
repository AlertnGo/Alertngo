import { Router } from "express";
import carController from "./carControllers";

const route = "/car";
const carRouter = Router();

carRouter.route(`${route}`).get(carController.getAllCar);
carRouter.route(`${route}/:id`).get(carController.findCar);
carRouter.route(`${route}`).post(carController.addCar);



export default carRouter;