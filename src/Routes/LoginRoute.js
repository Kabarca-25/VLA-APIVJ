const express = require("express");
const router = express.Router();
const loginController = require("../Controllers/LoginController")


router
    .post("/VerificarUsers", loginController.VerificarUser)


module.exports = router;



