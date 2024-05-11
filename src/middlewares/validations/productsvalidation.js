const { check, body } = require("express-validator");
const path = require("path");

const regExpFiles = /.png|.jpg|.jpeg|.webp|.gif/i;

const fieldTitle = check("titulo")
  .notEmpty()
  .withMessage("El titulo es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " .," })
  .withMessage("El titulo debe ser alfanumerico")
  .bail()
  .isLength({ min: 5, max: 100 })
  .withMessage("El titulo debe tener un minimo de 5 caracteres");

const fieldPrice = check("precio")
  .notEmpty()
  .withMessage("El precio es requerido")
  .bail()
  .isNumeric()
  .withMessage("El precio debe ser numerico")
  .bail()
  .isDecimal()
  .withMessage("El precio debe ser decimal");

const fieldDescription = check("descripcion")
  .notEmpty()
  .withMessage("La descripción es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " .," })
  .withMessage("La descripción debe ser alfanumerico")
  .bail()
  .isLength({ min: 30, max: 500 })
  .withMessage(
    "La descripción debe tener un minimo de 30 y un maximo de 500 caracteres"
  );

const fieldImagePrincipalStore = body("imagenPrincipal").custom(
  (value, { req }) => {
    const lengthImages = req.files?.image?.length;

    if (!lengthImages) throw new Error("Debes ingresar una imagen principal");
    else {
      if (lengthImages > 1)
        throw new Error("No puedes ingresar mas de 1 archivo");

      const extFile = path.extname(req.files.image[0].originalname);
      const isFormatSuccess = regExpFiles.test(extFile);

      if (!isFormatSuccess)
        throw new Error("El formato de la imagen principal es invalido");
    }
    return true;
  }
);

const fieldImagePrincipalUpdate = body("imagenPrincipal").custom(
  (value, { req }) => {
    const lengthImages = req.files?.image?.length;

    if (lengthImages) {
      if (lengthImages > 1)
        throw new Error("No puedes ingresar mas de 1 archivo");

      const extFile = path.extname(req.files.image[0].originalname);
      const isFormatSuccess = regExpFiles.test(extFile);

      if (!isFormatSuccess)
        throw new Error("El formato de la imagen principal es invalido");
    }
    return true;
  }
);



const defaultValidationFiels = [
  fieldTitle,
  fieldPrice,
  fieldDescription,
];

module.exports = {
  productsValidationStore: [
    ...defaultValidationFiels,
    fieldImagePrincipalStore
  ],
  productsValidationUpdate: [
    ...defaultValidationFiels,
    fieldImagePrincipalUpdate
  ],
};
