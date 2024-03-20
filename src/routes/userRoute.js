const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/profile", userController.getUserProfile);
router.post("/", userController.getAllUser);

module.exports = router;
