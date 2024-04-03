const express = require("express");
const router = express.Router();
const { login, register, logginProcces, registerProcess } = require("../controllers/autentication");
const {registerValidation } = require("../middlewares/validations/authvalidation");
const {loginValidation } = require("../middlewares/validations/loginValidation");

// Rutas
router.get("/iniciar", login);
router.post("/iniciar", loginValidation, logginProcces); 

router.get("/registrar", register);
router.post("/registrar", registerValidation, registerProcess); 

module.exports = router;
