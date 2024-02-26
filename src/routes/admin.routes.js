const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/", adminController.listProducts); 
router.get("/lista-productos", adminController.products); 
router.get("/lista-productos1", adminController.wasd); 
router.get("/lista-productos2", adminController.aa); 

module.exports = router;