import { Router } from "express";
import userController from "./userControllers.js";

const route = "/user";
const userRouter = Router();

userRouter.route(`${route}/signup`).post(userController.register);
userRouter.route(`${route}/login`).post(userController.login);
userRouter.route(`${route}`).get(userController.getAllUser);
userRouter.route(`${route}/:id`).get(userController.findUser);
userRouter.route(`${route}/:id`).patch(userController.editName);

export default userRouter;
