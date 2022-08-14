import { PrismaClient } from "@prisma/client";
import { compare, genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

const userController = {
  //register
  register: async (req, res) => {
    const { name, email, password } = req.body;

    console.log(req.body);
    if (email && password && name) {
      try {
        const findUser = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (findUser) {
          res.json({
            message: "l'utilisateur exsite déjà",
          });
        } else {
          const salt = await genSalt(10);
          const hashedPassword = await hash(password, salt);
          const adduser = await prisma.user.create({
            data: {
              email: email,
              name: name,
              password: hashedPassword,
            },
          });
          res.status(200).json(adduser);
        }
      } catch (e) {}
    }
  },

  //login
  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const findUser = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (findUser) {
          const comparePassword = await compare(password, findUser.password);
          if (comparePassword) {
            res.status(200).json(findUser);
          } else {
            res.status(401).json({
              message: "Mot de passe incorrect",
            });
          }
        } else {
          res.status(401).json({
            message: "Utilisateur non trouvé",
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  },

  //get all user
  getAllUser: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
    }
  },

  //get user by id
  findUser: async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.params.id,
        },
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404);
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export default userController;
