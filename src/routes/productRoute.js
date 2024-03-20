const express = require("express");
const productController = require("../controller/productController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, productController.getAllProducts);
router.get("/id/:id", authenticate, productController.findProductById);

module.exports = router;
