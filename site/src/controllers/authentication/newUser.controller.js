module.exports = (req,res) => {


    const {nombre,email,pass} = req.body;
    const newUsuario = {
        user: email,
        password: pass,
        name: nombre,
    };
    res.send(newUsuario);
}