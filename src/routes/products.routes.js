const express = require("express")
const router = express.Router();
const productsControllers = require("../controllers/products")

/* Productos */
/* router.get("/",produtsControllers.list) */
router.get("/producto/:id/:category?", productsControllers.detail)

/* router.get("/listado", productsControllers.list) */
module.exports = router
