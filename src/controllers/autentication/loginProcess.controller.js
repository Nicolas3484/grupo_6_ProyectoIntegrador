const { compareSync } = require("bcryptjs");
const { loadData } = require("../../database");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
 
  const errors = validationResult(req);

  
  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map(error => error.msg); 
    return res.status(400).json({ errors: validationErrors }); 
  }


  const { email, contraseña, recordarme } = req.body;

 
  const users = loadData("usuarios");


  if (!email) {
    return res.status(400).send("Debe ingresar un email");
  }


  const user = users.find((u) => u.email === email.toLowerCase());


  if (!user) {
    return res.status(404).send("El usuario no existe");
  }


  const isValidPass = compareSync(contraseña, user.contraseña);

  if (!isValidPass) {
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
}
