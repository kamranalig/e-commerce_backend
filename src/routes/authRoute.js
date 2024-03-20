const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();
router.post("/signup", authController.register);
router.post("/signin", authController.login);

module.exports = router;
