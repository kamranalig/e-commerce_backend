const express = require("express");
const cartController = require("../controller/cartController");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
router.get("/", authenticate, cartController.findUserCart);
router.put("/add", authenticate, cartController.addItemToCart);

module.exports = router;
