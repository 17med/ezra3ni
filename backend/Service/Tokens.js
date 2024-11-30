var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var key = process.env.JWT_KEY;
function createToken(data) {
  console.log("key", key);
  return jwt.sign(data, key);
}
function verifyToken(token) {}

module.exports = { createToken, verifyToken };
