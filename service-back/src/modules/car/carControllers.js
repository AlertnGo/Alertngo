import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const carController = {
  // get all car
  getAllCar: async (req, res) => {
    try {
      const cars = await prisma.car.findMany({
        where: {
          userId: JSON.parse(req.params.id),
        },
      });
      res.status(200).json(cars);
    } catch (e) {
      console.log(e);
    }
  },
  
  //get car by id
  findCar: async (req, res) => {
    console.log("hello", req);
    try {
      const car = await prisma.car.findUnique({
        where: {
          title: JSON.parse(req.params.title),
        },
      });
      res.status(200).json(car);
    } catch (e) {
      res.status(500).json(
        "le numero noo"
      );
    }
  },

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

  //update car
  updateCar: async (req, res) => {
    try {
      const car = await prisma.car.update({
        where: {
          id: req.params.id,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(car);
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
};

export default carController;
