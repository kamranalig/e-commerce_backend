const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to ecommerce api - node", status: true });
});

const authRouters = require("./routes/authRoute");
const userRouters = require("./routes/userRoute");
app.use("/auth", authRouters);
app.use("/user", userRouters);
module.exports = app;
