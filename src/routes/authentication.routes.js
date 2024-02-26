const express = require("express")
const router = express.Router();
const authController = require("../controllers/autentication")

router.get("/",authController.login)
router.get("/",authController.register)
router.post("/nuevo-usuario",authController.newUser)
router.put("/nuevo-usuario")
router.patch("/nuevo-usuario")
router.delete("/nuevo-usuario")
module.exports = router