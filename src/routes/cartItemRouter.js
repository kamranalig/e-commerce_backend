const express = require("express");
const cartItemController = require("../controller/cartItemController");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
router.put("/:id", authenticate, cartItemController.updateCartItem);
router.put("/:id", authenticate, cartItemController.removeCartItem);

module.exports = router;
