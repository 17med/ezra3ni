var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var key = process.env.JWT_KEY;
function createToken(data) {
  console.log("key", key);
  return jwt.sign(data, key);
}
function verifyToken(token) {
  try {
    return jwt.verify(token, key);
  } catch (e) {
    return null;
  }
}

module.exports = { createToken, verifyToken };
