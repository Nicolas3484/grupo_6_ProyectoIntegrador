const path = require('path');

module.exports = (req, res) =>{
    const { imagen } = req.params;
    const imagePathh = path.join(__dirname, '../../../public/images/productos/', imagen);
    res.sendFile(imagePathh);
   };