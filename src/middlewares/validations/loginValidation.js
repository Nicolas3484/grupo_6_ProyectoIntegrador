const { body } = require("express-validator");
const { loadData } = require("../../database");
const bcrypt = require("bcryptjs");


const fieldEmailDefault = body("email")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isEmail()
  .withMessage("Formato invalido")
  .bail();

const fieldPasswordDefault = body("contraseña")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail();;

  const fieldEmailLogin = fieldEmailDefault.custom((value, { req }) => {
    const users = loadData("usuarios");
    const user = users.find((a) => a.email === value.trim());
  
    if (!user) {
        throw new Error("No se encontró ningún usuario registrado con este correo electrónico");
    }
  
    req.user = user; 
  
    return true;
});

const fieldPasswordLogin = fieldPasswordDefault.custom((value, { req }) => {
    if (!req.user) {
        throw new Error("Por favor, ingrese un correo electrónico válido");
    }

    const contraseñaHash = bcrypt.compareSync(value, req.user.contraseña); 

    if (!contraseñaHash) {
        throw new Error("La contraseña proporcionada es incorrecta");
    }

    return true;
});

module.exports = {
    loginValidation: [fieldEmailLogin, fieldPasswordLogin],}

    

    