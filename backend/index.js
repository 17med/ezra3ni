const express = require("express");
const dotenv = require("dotenv");
const { Connect, add, getToken } = require("./Service/Redis");
const MainRouter = require("./Routing/MainRoute");
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", MainRouter);
Connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((error) => {
    console.log(error);
  });
const port = process.env.PORT || 3005;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
