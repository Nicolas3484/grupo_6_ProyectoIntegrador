const path = require("path")
const { compareSync } = require("bcryptjs");
const { loadData } = require("../../database");
module.exports = (req, res) => {
  const { correo, contraseña } = req.body;
  const users = loadData("usuarios");
  const userFind = users.find((u) => u.correo === correo);

  if (!userFind) {
    return res.send("usuario no encontrado");
  }

if(+contraseña !== userFind.contraseña){
  return res.send("contraseña incorrecta")
}

  // const isValidPass = compareSync(contraseña, userFind.contraseña);

 //   if (!isValidPass) {
//      return res.send("Credenciales invalidas");
 //   }
  

 const {nombre} = userFind
 req.session.userLogin = {
    nombre,
  };

//  if (remember) {
//    res.cookie("userLogin", req.session.userLogin, { maxAge: 5000 });
 // }
  res.redirect("/");
};