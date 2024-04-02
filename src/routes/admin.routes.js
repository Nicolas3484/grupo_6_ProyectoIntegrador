const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const {uploadProducts} = require("../middlewares/uploads")






// "/admin"
router.get("/romperla", adminController.romperla); 
router.get("/", adminController.asd); 
router.get("/productos", adminController.listProducts); 
router.get("/nuevo-producto", adminController.newProduct); 
router.post("/nuevo-producto", uploadProducts.single(
"imagePrincipal"), adminController.storeProduct);


router.get("/editar-producto/:id", adminController.updateProduct);
router.put("/editar-producto/:id",uploadProducts.single(
    "imagePrincipal"),adminController.editProduct);


router.get("/eliminar-producto", adminController.eliminar);
router.delete("/eliminar-producto/:id",adminController.removeProduct)

module.exports = router;