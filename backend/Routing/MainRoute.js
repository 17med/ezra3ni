const Router = require("express").Router();
const UserRouter = require("./UsersRoute");
Router.use("/user", UserRouter);
module.exports = Router;
