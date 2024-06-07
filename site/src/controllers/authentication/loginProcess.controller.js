
 const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map(error => error.msg); 
    return res.status(400).json({ errors: validationErrors }); 
  }
  const { email, contraseña, recordarme } = req.body;

  db.user.findOne({
    where: {
      email,
    }
  }) 
  .then(user => {
    if (!user) {
      return res.status(404).send("El usuario no existe");
    }

    const contraseñaHash = bcrypt.compareSync(contraseña, user.contraseña);

    if (!contraseñaHash) {
      return res.status(401).send("Credenciales inválidas");
    }

    const { nombre, role } = user;

    req.session.userLogin = {
      nombre,
      email,
      role,
    };

    if (recordarme) {
      res.cookie("userLogin", req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 * 30 }); 
    } 

    res.redirect("/");
  })
  .catch(error => {
    console.error("Error al buscar el usuario en la base de datos:", error);
    return res.status(500).send("Error del servidor");
  });
}
