const express = require("express");
const router = express.Router();
const videoJuegosController = require("../Controllers/VideoJuegosController")


router
    .get("/ObtenerTodosLosVideoJuegos", videoJuegosController.ObtenerTodosLosVideoJuegos)


module.exports = router;
