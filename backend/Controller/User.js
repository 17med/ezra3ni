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
    res.send("Transform User");
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
  static async (req,res){
    const {}
  }
}

module.exports = UserController;
