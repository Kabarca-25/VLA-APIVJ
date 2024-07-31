const express = require("express");
const router = express.Router();
const consoleController = require("../Controllers/ConsolesController")


router
    .get("/ObtenerTodasConsolas", consoleController.ObtenerTodasLasConsolas)


module.exports = router;



