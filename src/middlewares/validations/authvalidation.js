const { body } = require("express-validator");
const { loadData } = require("../../database");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const fieldEmailDefault = body("email")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isEmail()
  .withMessage("Formato invalido")
  .bail();

const fieldPasswordDefault = body("contrasenia")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail();

const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
  const users = loadData("usuarios");
  const existUser = users.find((u) => u.email === value.trim());

  if (!existUser) {
    throw new Error("Email Incorrecto");
  }

  return true;
});

const fieldPasswordRegister = fieldPasswordDefault
  .isLength({ min: 8, max: 16 })
  .withMessage("Longitud invalida")
  .bail()
  .matches(regExPass)
  .withMessage("La contraseña es invalida");

  const fieldEmailLogin = fieldEmailDefault.custom((value, { req }) => {
    const users = loadData("usuarios");
    const user = users.find((u) => u.email === value.trim());
  
    if (!user) {
      throw new Error("No se encontró ningún usuario registrado con este correo electrónico");
    }
  
    // Si lo deseas, también podrías almacenar el usuario encontrado en el objeto de solicitud para su posterior uso
    req.user = user;
  
    return true;
  });

module.exports = {
  loginValidation: [fieldEmailLogin,],
  registerValidation: [fieldEmailRegister, fieldPasswordRegister],
};