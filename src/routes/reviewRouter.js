const express = require("express");
const reviewController = require("../controller/reviewController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/create", authenticate, reviewController.createReview);
router.get("/product/:productId", authenticate, reviewController.getAllReview);

module.exports = router;
