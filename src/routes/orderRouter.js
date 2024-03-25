const express = require("express");
const orderController = require("../controller/orderController");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
router.post("/", authenticate, orderController.createOrders);
router.get("/user", authenticate, orderController.orderHistory);
router.get("/:orderId", authenticate, orderController.findOrderById);
module.exports = router;
