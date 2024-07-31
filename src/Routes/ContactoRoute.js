const express = require("express");
const router = express.Router();
const contactoController = require("../Controllers/ContactoController")


router
  .post("/GuardarContacto", contactoController.GuardarContacto)
  .get("/ObtenerTodosLosContactos", contactoController.ObtenerTodosLosContactos)
    


module.exports = router;