import { Router } from "express";
import userController from "./userControllers.js";

const route = "/user";
const userRouter = Router();

userRouter.route(`${route}/signup`).post(userController.register);
userRouter.route(`${route}/login`).post(userController.login);
userRouter.route(`${route}/:id`).get(userController.findUser);
userRouter.route(`${route}/:id/:name`).patch(userController.editName);

export default userRouter;
