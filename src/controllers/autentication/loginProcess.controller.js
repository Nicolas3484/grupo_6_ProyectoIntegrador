const { compareSync } = require("bcryptjs");
const { loadData } = require("../../database");

module.exports = (req, res) => {
  const { email, contraseña,  } = req.body;
  const users = loadData("usuarios");

  if (!email) {
    return res.send("Debe ingresar un email");
  }

  const userFind = users.find((u) => u.email === email.toLowerCase());

  if (!userFind) {
    return res.send("El usuario no existe");
  }
console.log(userFind)
  const isValidPass = compareSync(contraseña, userFind.contraseña);
  console.log(isValidPass)
  if (!isValidPass) {
    return res.send("Credenciales invalidas");
  }
 const { name, role,  } = userFind;
  req.session.userLogin = {
    name,
    email,
    role,
  };

 /*  if (remember) {
    res.cookie("userLogin", req.session.userLogin, { maxAge: 5000 });
  } */

  res.redirect("/");
};