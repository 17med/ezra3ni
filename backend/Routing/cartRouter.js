const Router = require("express").Router();
const CartController = require("../Controller/CartController");
const { verifyUser } = require("../middleware/authMiddleware");
const {
  getmycart,
  addtomycart,
  deletetomycart,
} = require("../middleware/CartMidlleware");

Router.post("/add", addtomycart, CartController.addProductToCart);
Router.delete(
  "/",

  deletetomycart,
  CartController.deleteProductFromCart
);
Router.get("/", getmycart, CartController.getCart);

module.exports = Router;
