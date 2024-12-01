const { verifyToken } = require("../Service/Tokens");
getmycart = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  if (!user || user.types !== "user") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log("user", user);
  req.params.userId = user.id;
  next();
};
addtomycart = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  if (!user || user.types !== "user") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.body.userId = user.id;
  req.body.quantity = 1;
  next();
};
deletetomycart = async (req, res, next) => {
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
  req.params.productId = req.query.productId;
  req.body.quantity = 1;
  next();
};


module.exports = { getmycart, addtomycart, deletetomycart };
