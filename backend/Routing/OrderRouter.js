const Router = require("express").Router();
const CommandController = require("../Controller/CommandController");
const { sellercommand } = require("../middleware/CommandMiddleware");
const { orderCommandMiddleware } = require("../middleware/CommandMiddleware");

Router.post("/pass", orderCommandMiddleware, CommandController.placeOrder);
Router.get("/mycommand", sellercommand, CommandController.getOrdersForSeller);
module.exports = Router;
