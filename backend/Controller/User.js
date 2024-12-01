const { getTokenfromrequest } = require("../Service/auther");
const { createToken } = require("../Service/Tokens");
const { getToken, add } = require("../Service/Redis");
const { PrismaClient } = require("@prisma/client");
const { hashPassword, comparePasswords } = require("../Service/Securiy");
const prisma = new PrismaClient();
class UserController {
  static async createUser(req, res) {
    try {
      const mdp = await hashPassword(req.body.password);
      const x = await prisma.Users.create({
        data: {
          email: req.body.email,
          password: mdp,
          username: req.body.username,
        },
      });
      const s = JSON.parse(JSON.stringify(x));
      delete s.password;
      const token = createToken(x);
      await add(token, JSON.stringify(s));
      res.json({ token: token, data: s });
    } catch (e) {
      console.log(e);
      res.json({ message: "Error" });
    }
  }
  static async Login(req, res) {
    try {
      const user = await prisma.Users.findFirst({
        where: {
          email: req.body.email,
        },
      });
      if (user == null) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      if (await comparePasswords(req.body.password, user.password)) {
        const s = JSON.parse(JSON.stringify(user));
        delete s.password;
        const token = createToken(s);
        await add(token, JSON.stringify(s));
        res.json({ token: token, data: s });
      } else {
        return res.status(401).json({ message: "Unauthorized" });
      }
    } catch (e) {
      console.log(e);
      res.json({ message: "Error" });
    }
  }
  static async transformUser(req, res) {
    const { iduser, types } = req.body;
    console.log(iduser, types);
    try {
      const user = await prisma.Users.update({
        where: {
          id: iduser,
        },
        data: {
          types: types,
        },
      });
      res.json(user);
    } catch (e) {
      console.log(e);
      res.json({ message: "Error" });
    }
  }
  static async isLogin(req, res) {
    const x = getTokenfromrequest(req, res);

    if (typeof x == "object") {
      return;
    }
    const data = await getToken(x);
    if (data == null) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      return res.status(200).json({ message: "Authorized" });
    }
  }
  static async getUsers(req, res) {
    try {
      // Fetch all users where `types` is not 'admin'
      const users = await prisma.users.findMany({
        where: {
          types: { not: "admin" },
        },
        select: {
          id: true,
          username: true,
          email: true,
          types: true,
        },
      });

      if (users.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }

      res.json(users);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error fetching users" });
    }
  }
}

module.exports = UserController;
