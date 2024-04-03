const { compareSync } = require("bcryptjs");
const { loadData } = require("../../database");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  // Obtiene los errores de validación de la solicitud
  const errors = validationResult(req);

  // Si hay errores de validación, retorna un mensaje de error
  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map(error => error.msg); // Obtener solo los mensajes de error
    return res.status(400).json({ errors: validationErrors }); // Devolver los errores al cliente
  }

  // Obtiene los datos de la solicitud
  const { email, contraseña, recordarme } = req.body;

  // Carga los usuarios de la base de datos
  const users = loadData("usuarios");

  // Verifica si se proporcionó un email
  if (!email) {
    return res.status(400).send("Debe ingresar un email");
  }

  // Busca el usuario por email en la base de datos
  const user = users.find((u) => u.email === email.toLowerCase());

  // Si no se encuentra el usuario, retorna un mensaje de error
  if (!user) {
    return res.status(404).send("El usuario no existe");
  }

  // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
  const isValidPass = compareSync(contraseña, user.contraseña);

  // Si las contraseñas no coinciden, retorna un mensaje de error
  if (!isValidPass) {
    return res.status(401).send("Credenciales inválidas");
  }

  // Si las credenciales son válidas, crea la sesión del usuario
  const { nombre, role } = user;
  req.session.userLogin = {
    nombre,
    email,
    role,
  };

  // Si se seleccionó recordarme, establece una cookie de sesión con una duración prolongada
  if (recordarme) {
    res.cookie("userLogin", req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 * 30 }); // Por ejemplo, una duración de 30 días
  } 

  // Redirige al usuario a la página principal
  res.redirect("/");
}
