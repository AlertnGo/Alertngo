import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const carController = {
  //add car
  addCar: async (req, res) => {
    const { title, userId } = req.body;
    try {
      const car = await prisma.car.create({
        data: {
          title: title,
          userId: userId,
        },
      });
      res.status(201).json(car);
    } catch (e) {
      console.log(e);
    }
  },

  deleteCar: async (req, res) => {
    try {
      await prisma.car.delete({
        where: {
          id: JSON.parse(req.params.id),
        },
      });
      res.status(200).json("C'est fait");
    } catch (e) {
      console.log(e);
    }
  },

  //get car by title
  findCar: async (req, res) => {
    try {
      const car = await prisma.car.findMany({
        where: {
          title: req.params.title,
        },
        include: {
          User: {
            select: { telephone: true, name: true },
          },
        },
      });
      res.status(200).json(car);
    } catch (e) {
      res.status(500).json("le numéro que vous avez essayé est introuvable");
    }
  },

  getAll: async (req, res) => {
    try {
      const adds = await prisma.car.findMany({
        include: {
          User: {
            select: { telephone: true },
          },
        },
      });
      res.status(200).json(adds);
    } catch (e) {
      console.log(e);
    }
  },
};

export default carController;
