const Router = require("express").Router();
const ProductController = require("../Controller/ProductController");

Router.post("/create", ProductController.createProduct);

Router.get("/", ProductController.getAllProducts);

Router.get("/:id", ProductController.getProductById);

module.exports = Router;
