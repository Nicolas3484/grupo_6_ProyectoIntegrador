/* const { body } = require("express-validator");
const { loadData } = require("../../database");
const db = require("../../database/models");
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

  if (existUser) {
    throw new Error("Credenciales Invalidas");
  }

  return true;
});

const fieldPasswordRegister = fieldPasswordDefault
  .isLength({ min: 8, max: 16 })
  .withMessage("Longitud invalida")
  .bail()
  .matches(regExPass)
  .withMessage("La contraseña es invalida");

  const fieldImagePrincipalUpdate = body("imagePrincipal").custom(
    (value, { req }) => {
      const lengthImages = req.files?.imagePrincipal?.length;
  
      if (lengthImages) {
        if (lengthImages > 1)
          throw new Error("No puedes ingresar mas de 1 archivo");
  
        const extFile = path.extname(req.files.imagePrincipal[0].originalname);
        const isFormatSuccess = regExpFiles.test(extFile);
  
        if (!isFormatSuccess)
          throw new Error("El formato de la imagen principal es invalido");
      }
      return true;
    }
  );
 */
  const { body } = require("express-validator");
  const db = require("../../database/models");
  const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  
  const fieldEmailDefault = body("email")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail()
    .isEmail()
    .withMessage("Formato inválido")
    .bail();
  
  const fieldPasswordDefault = body("contrasenia")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail();
    
  const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
    const existUser = db.user.findOne({ where: { email: value.trim() } });
  
    if (!existUser) {
      throw new Error("Email ya registrado");
    }
  
    return true;
  });
  
  const fieldPasswordRegister = fieldPasswordDefault
    .isLength({ min: 8, max: 16 })
    .withMessage("Longitud inválida")
    .bail()
    .matches(regExPass)
    .withMessage("La contraseña es inválida");
  
 
module.exports = {

  registerValidation: [fieldEmailRegister, fieldPasswordRegister],
  
};