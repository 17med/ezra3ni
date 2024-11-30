const Router = require("express").Router();
const CartController = require("../Controller/CartController");
const { verifyUser } = require("../middleware/authMiddleware");


Router.post("/add", verifyUser, CartController.addProductToCart);


Router.get("/:userId", verifyUser, CartController.getCart);

module.exports = Router;
