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

  sendMessage: async (req, res) => {
    const client = require("twilio")(accountSid, authToken);
    const accountSid = "AC4db4b6b824f3b8765962d9a74cddf93d";
    
    const authToken = "0cb67593880e3f329ba218f639b6d902";

    try {
      client.messages
        .create({
          body: req.body.message,
          from: "+15017122661",
          to: req.body.to,
        })
        .then((message) => console.log(message.sid));
    } catch (error) {
      console.log(error);
    }
  },
};

export default addController;
