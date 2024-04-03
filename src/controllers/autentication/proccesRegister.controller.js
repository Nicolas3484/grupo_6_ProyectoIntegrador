const bcrypt = require("bcryptjs");
const { loadData, saveData } = require("../../database");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { nombre, email, contrasenia, confirmarcontrasenia } = req.body;
    
    
    if (contrasenia === confirmarcontrasenia) {
      const users = loadData("usuarios");
      const newUser = {
        id: !users.length ? 1 : users[users.length - 1].id + 1,
        nombre: nombre,
        email: email?.trim().toLowerCase(),
        contraseña: bcrypt.hashSync(contrasenia?.trim(), 12), 
        role: "USUARIO",
        avatar: "/images/icons/elpesho.png"
      };
      console.log(newUser);
      users.push(newUser);

      saveData(users, "usuarios");

      res.redirect("/");
      return;
    } else {
     
      res.redirect("/registrar");
    }
  } else {

    console.log(errors.array()); 
    res.send(errors.mapped()); 
  }
};
