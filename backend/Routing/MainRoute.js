const Router = require("express").Router();
const UserRouter = require("./UsersRoute");
const CartRouter = require("./cartRouter");
const ProductRouter = require("./productRouter");

Router.use("/user", UserRouter);

Router.use("/cart", CartRouter);

Router.use("/product", ProductRouter);

module.exports = Router;
