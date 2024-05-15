 const path = require('path');

module.exports = (req, res) =>{
     const { image } = req.params;
     const imagePath = path.join(__dirname, '../../../public/images/icons', image);
     res.sendFile(imagePath);
    }; 