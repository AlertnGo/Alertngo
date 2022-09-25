import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addController = {
  getAll: async (req, res) => {
    try {
      const adds = await prisma.annonce.findMany();
      res.status(200).json(adds);
    } catch (e) {
      console.log(e);
    }
  },

  //add car
  addAdd: async (req, res) => {
    try {
      const car = await prisma.annonce.create({
        data: {
          ...req.body,
        },
      });
      res.status(201).json(car);
    } catch (e) {
      console.log(e);
    }
  },
};

export default addController;
