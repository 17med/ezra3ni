const { verifyToken } = require("../Service/Tokens");
function verifTokenSeller(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  if (!user || user.types !== "prov") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.params.ownerId = user.id;
  req.body.ownerId = user.id;
  next();
}
module.exports = { verifTokenSeller };
