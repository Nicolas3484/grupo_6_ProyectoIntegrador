const bcrypt = require("bcryptjs");
const { loadData, saveData } = require("../../database");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { nombre, email, contrasenia, confirmarcontrasenia } = req.body;
    
    // Verifica si las contraseñas coinciden
    if (contrasenia === confirmarcontrasenia) {
      const users = loadData("usuarios");
      const newUser = {
        id: !users.length ? 1 : users[users.length - 1].id + 1,
        nombre: nombre,
        email: email?.trim().toLowerCase(),
        contraseña: bcrypt.hashSync(contrasenia?.trim(), 12), // Se usa "contraseña" en lugar de "contrasenia" para mantener consistencia
        role: "USUARIO",
      };
      console.log(newUser);
      users.push(newUser);

      saveData(users, "usuarios");

      res.redirect("/");
      return;
    } else {
      // Si las contraseñas no coinciden, redirecciona a la página de registro nuevamente
      res.redirect("/registrar");
    }
  } else {
    // Si hay errores de validación, imprímelos en la consola y maneja apropiadamente
    console.log(errors.array()); // Cambiado a errors.array() para imprimir todos los errores
    res.send(errors.mapped()); // Enviar errores como respuesta al cliente
  }
};
