const Router = require("express").Router();
const UserController = require("../Controller/User");
const { verifyUseradmin } = require("../middleware/authMiddleware");
Router.get("/islogin", UserController.isLogin);
Router.post("/login", UserController.Login);
Router.post("/create", UserController.createUser);
Router.get("/getall", verifyUseradmin, UserController.getUsers);
Router.post("/transform", verifyUseradmin, UserController.transformUser);
module.exports = Router;
