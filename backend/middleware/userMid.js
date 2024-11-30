function verifCreatedUser(req, res, next) {
  console.log(req.body.email);
  if (req.body.email && req.body.password && req.body.username) {
    next();
  } else {
    res.status(400).json("Bad request");
  }
}
function verifLoginUser(req, res, next) {
  if (req.body.email && req.body.password) {
    next();
  } else {
    res.status(400).json("Bad request");
  }
}

module.exports = { verifCreatedUser, verifLoginUser };
