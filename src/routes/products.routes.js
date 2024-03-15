const express = require("express")
const router = express.Router();
const produtsControllers = require("../controllers/products")

/* Productos */
/* router.get("/",produtsControllers.list) */
router.get("/producto/:id/:category?", produtsControllers.detail)
module.exports = router