const express = require("express")
const router = express.Router();
const cartController = require("../controllers/cart")

/* Carrito de compras */
router.get("/",cartController.getCart)

module.exports = router