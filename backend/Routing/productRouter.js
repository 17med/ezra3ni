const Router = require("express").Router();
const ProductController = require("../Controller/ProductController");
const { verifTokenSeller } = require("../middleware/ProductMiddleware");
Router.post("/create", verifTokenSeller, ProductController.createProduct);

Router.get("/", ProductController.getAllProducts);
Router.get(
  "/myproducts",
  verifTokenSeller,
  ProductController.getProductsByOwner
);
Router.delete("/delete/:id", verifTokenSeller, ProductController.deleteProduct);
Router.get("/:id", ProductController.getProductById);

module.exports = Router;
