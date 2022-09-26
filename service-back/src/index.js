import express from "express";
import helmet from "helmet";
import cors from "cors";
import prisma from "../index.js";
import userRoute from "./modules/user/userRouter.mjs";
import carRoute from "./modules/car/carRouter.mjs";
import addRoute from "./modules/add/addRouter.mjs";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    allowedHeaders: "Content-Type,Authorization",
    exposedHeaders: "Content-Range,X-Content- Range",
    credentials: true,
    origin: process.env.FRONTEND,
  })
);
app.use("/api/", userRoute);
app.use("/api/", carRoute);
app.use("/api/", addRoute);

app.get(`/api`, async (req, res) => {
  res.json("Bienvenu sur le serveur de Alertngo");
});

app.listen(process.env.PORT, () =>
  console.log(`
🚀 Server ready at ${process.env.PORT}`)
);

export default prisma;
