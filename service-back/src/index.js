import express from "express";
import helmet from "helmet";

import userRoute from "./modules/user/userRouter.mjs";
import prisma from "../index.js";

const app = express();
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/' , userRoute);

app.get(`/api`, async (req, res) => {
  res.json("Bienvenu sur le serveur de Alertngo");
});

app.listen(5000, () =>
  console.log(`
🚀 Server ready at: http://localhost:5000`)
);

export default prisma;
