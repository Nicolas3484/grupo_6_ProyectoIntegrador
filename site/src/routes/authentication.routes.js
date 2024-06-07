const express = require("express");
const router = express.Router();
const { login, register, logginProcces, registerProcess,logout } = require("../controllers/authentication");
const {registerValidation } = require("../middlewares/validations/authvalidation");
const {loginValidation } = require("../middlewares/validations/loginValidation");
const userProfile = require("../controllers/authentication/userProfile");
// Rutas
router.get("/iniciar", login);
router.post("/iniciar", loginValidation, logginProcces); 

router.get("/registrar", register);

router.post("/registrar", registerValidation, registerProcess)

router.get("/perfil", userProfile)

router.get("/cerrar-sesion", logout)

module.exports = router;
