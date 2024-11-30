const Router = require("express").Router();
const UserController = require("../Controller/User");
const { verifCreatedUser, verifLoginUser } = require("../middleware/userMid");
Router.get("/islogin", UserController.isLogin);
Router.post("/login", verifLoginUser, UserController.Login);
Router.post("/create", verifCreatedUser, UserController.createUser);
module.exports = Router;
