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
const productRouter = require("./routes/productRoute");
const adminProductRouter = require("./routes/adminProduct");
const cartRouter = require("./routes/cartRoute");
const cartItemRouter = require("./routes/cartItemRouter");
const orderRouter = require("./routes/orderRouter");
const adminOrderRouter = require("./routes/adminOrderRoute");
const reviewRouter = require("./routes/reviewRouter");
const ratingRouter = require("./routes/ratingRoute");
app.use("/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);
module.exports = app;
