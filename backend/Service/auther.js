function getTokenfromrequest(req, res) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return authHeader.split(" ")[1];
}
module.exports = { getTokenfromrequest };
