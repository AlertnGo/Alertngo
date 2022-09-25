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
          userId: req.body.userId,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          title: req.body.title,
        },
      });
      res.status(201).json(car);
    } catch (e) {
      console.log(e);
    }
  },
};

export default addController;
