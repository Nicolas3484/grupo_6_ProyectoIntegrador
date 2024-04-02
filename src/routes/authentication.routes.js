const express = require("express")
const router = express.Router();


const { login, register, logginProcces, registerProcess } = require("../controllers/autentication");


// /auth
router.get("/iniciar", login);
router.post("/iniciar", logginProcces)

router.get("/registrar", register);

router.post("/registrar", registerProcess)

module.exports = router;
module.exports = router