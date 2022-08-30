import { Router } from "express";
import carController from "./carControllers.js";

const route = "/car";
const carRouter = Router();

carRouter.route(`${route}`).post(carController.addCar);
carRouter.route(`${route}/:id`).get(carController.getAllCar);
carRouter.route(`${route}/:id`).delete(carController.deleteCar);
carRouter.route(`${route}/`).get(carController.findCar);
carRouter.route(`${route}/:id`).put(carController.updateCar);



export default carRouter;
