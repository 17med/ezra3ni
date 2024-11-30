const { createClient } = require("redis");
var client;
async function Connect() {
  try {
    client = createClient({
      url: process.env.REDIS_URL,
    });
    await client.connect();
  } catch (error) {
    console.log(error);
  }
}

async function add(token, data) {
  try {
    await client.set(token, data);
    await client.expire(token, 1296000);
  } catch {
    console.log(error);
  }
}
async function getToken(token) {
  try {
    return await client.get(token);
  } catch {
    console.log(error);
  }
}
module.exports = { Connect, add, getToken };
