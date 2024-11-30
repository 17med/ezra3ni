const bcrypt = require("bcrypt");
const saltRounds = 10;

async function hashPassword(password) {
  if (!password) {
    throw new Error("Password is required");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword.toString();
  } catch (error) {
    throw new Error(`Error hashing password: ${error.message}`);
  }
}
async function comparePasswords(plainPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    if (match) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
module.exports = { hashPassword, comparePasswords };
