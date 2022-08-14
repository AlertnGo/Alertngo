import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const carController = {
  //get all car
  getAllCar: async (req, res) => {
    try {
      const cars = await prisma.car.findMany();
      res.status(200).json(cars);
    } catch (e) {
      console.log(e);
    }
  },

  //get car by id
  findCar: async (req, res) => {
    try {
      const car = await prisma.car.findUnique({
        where: {
          id: req.params.id,
        },
      });
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404);
      }
    } catch (e) {
      console.log(e);
    }
  },

  //add car
  addCar: async (req, res) => {
    try {
      const car = await prisma.car.create({
        data: {
          ...req.body,
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
};

export default carController;
