const { getTokenfromrequest } = require("../Service/auther");
const { getToken } = require("../Service/Redis");

const verifyUser = async (req, res, next) => {
  const token = getTokenfromrequest(req, res);
  if (typeof token === "object") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const userData = await getToken(token);
  if (!userData) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.user = JSON.parse(userData);
  next();
};
const verifyUseradmin = async (req, res, next) => {
  const token = getTokenfromrequest(req, res);
  if (typeof token === "object") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const userData = await getToken(token);
  if (!userData) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = JSON.parse(userData);

  if (req.user.types !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

const verifyUseradmin2 = async (req, res, next) => {
  const token = getTokenfromrequest(req, res);
  if (typeof token === "object") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const userData = await getToken(token);
  if (!userData) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = JSON.parse(userData);

  if (req.user.types !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
module.exports = { verifyUser, verifyUseradmin };
