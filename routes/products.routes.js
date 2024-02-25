const express = require("express")
const router = express.Router();
const produtsControllers = require("../controllers/products")

/* Productos */
router.get("/",produtsControllers.list)
router.get("detalle/:id/:category?", produtsControllers.detail)
module.exports = router