const bcrypt = require("bcryptjs");
const db = require("../../database/models");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { nombre, email, contrasenia, confirmarcontrasenia } = req.body;
    
    if (contrasenia === confirmarcontrasenia) {
      bcrypt.hash(contrasenia.trim(), 12)
        .then(hashedPassword => {
          return db.user.create({
            nombre: nombre,
            email: email?.trim().toLowerCase(),
            contraseña: hashedPassword,
            role: "USUARIO",
            avatar: "/images/icons/elpesho.png"
          });
        })
        .then(() => {
          res.redirect("/");
        })
        .catch(error => {
          console.error("Error al crear el usuario:", error);
          res.status(500).send("Error interno del servidor");
        });
    } else {
      res.status(400).send("Las contraseñas no coinciden");
    }
  } else {

    const errorMessages = errors.array().map(error => error.msg);
    res.status(400).send(errorMessages.join(", "));
  }
};
