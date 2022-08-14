import { Router } from "express";
import userController from "./userControllers.js";

const route = "/user";
const userRouter = Router();

userRouter.route(`${route}`).post(userController.register);
userRouter.route(`${route}/login`).post(userController.login);
userRouter.route(`${route}`).get(userController.getAllUser);
userRouter.route(`${route}/:id`).get(userController.findUser);

export default userRouter;
