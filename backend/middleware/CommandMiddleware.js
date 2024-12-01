const { verifyToken } = require("../Service/Tokens");
function orderCommandMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  if (!user || user.types !== "user") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.params.userId = user.id;
  next();
}

const sellercommand = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  if (!user || user.types !== "prov") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.params.sellerId = user.id;

  next();
};
module.exports = { orderCommandMiddleware, sellercommand };
