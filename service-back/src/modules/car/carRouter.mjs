import { Router } from "express";
import carController from "./carControllers.js";

const route = "/car";
const carRouter = Router();

carRouter.route(`${route}`).post(carController.addCar);
carRouter.route(`${route}/:title`).get(carController.findCar);
carRouter.route(`${route}`).get(carController.getAll);
carRouter.route(`${route}/:id`).delete(carController.deleteCar);




export default carRouter;
