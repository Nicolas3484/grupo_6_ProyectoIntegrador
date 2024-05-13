/*const { compareSync } = require("bcryptjs");
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
*/
const bcrypt = require("bcryptjs");

const db = require("../../database/models");

module.exports = (req, res) => {
  const { email, password, remember } = req.body;

  db.User.findOne({
    where: {
      email,
    },
    include:["role"]
  }).then((user) => {
  
    if (!user) res.send("El usuario no existe");

    const isPasswordValid = bcrypt.compareSync(password, user?.password);

    if (!isPasswordValid) res.send("El password es incorrecto");

    req.session.userLogin = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      avatar: user.avatar,
      role: user.role.name,
    };

    if (remember)
      res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 });

    res.redirect("/");
  });
};