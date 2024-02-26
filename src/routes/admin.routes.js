const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/", adminController.asd); 
router.get("/productos", adminController.listProducts); 
router.get("/nuevo-producto", adminController.newProduct); 
router.post("/nuevo-producto", adminController.storeProduct);


router.get("/editar-producto/:id", adminController.updateProduct); 

module.exports = router;