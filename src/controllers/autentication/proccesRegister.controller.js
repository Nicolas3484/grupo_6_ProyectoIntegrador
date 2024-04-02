const bcrypt = require("bcryptjs");
const { loadData, saveData } = require("../../database");

module.exports = (req, res) => {
  const { nombre, email, contrasenia, confirmarcontrasenia } = req.body;
  // Verificar si la contraseña y la confirmación de la contraseña coinciden
  if (contrasenia === confirmarcontrasenia) {
    const users = loadData("usuarios");
    const newUser = {
      id: !users.length ? 1 : users[users.length - 1].id + 1,
      nombre: nombre,
      email: email?.trim().toLowerCase(),
      contraseña: bcrypt.hashSync(contrasenia?.trim(), 12),
      role: "USUARIO",
    };
console.log(newUser)
    users.push(newUser);

    saveData(users, "usuarios");

    res.redirect("/");
  } else {
    // Si las contraseñas no coinciden 
    res.redirect("/registrar");
  }
};
