import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const annonceController = {


 
  //get all adds
  getAll: async (req, res) => {
    try {
      const adds = await prisma.annonce.findMany();
      res.status(200).json(adds);
    } catch (e) {
      console.log(e);
    }
  }



};

export default annonceController;
