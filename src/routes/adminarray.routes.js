const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/admin");
const { uploadProducts } = require("../../middlewares/uploads");

// "/admin"
router.get("/productos", adminController.listProducts);

router.get("/nuevo-producto", adminController.createProduct);
router.post(
  "/nuevo-producto",
  uploadProducts.array("imagesSecondary"),
  adminController.storeProduct
);

router.get("/editar-producto/:id", adminController.updateProduct);
router.put(
  "/editar-producto/:id",
  uploadProducts.array("imagesSecondary"),
  adminController.editProduct
);

router.get("/eliminar-producto", adminController.eliminar);
router.delete("/eliminar-producto/:id", adminController.removeProduct);

module.exports = router;