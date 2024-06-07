module.exports = (req,res) => {


    const {nombre,email,contrasenia} = req.body;
    const newUsuario = {
        user: email,
        password: contrasenia,
        name: nombre,
    };
    res.send(newUsuario);
}