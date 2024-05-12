const db = require("../../database/models");
module.exports = (req, res) => {
  const { id } = req.params;
  db.product.findByPk(id)
  .then((products) => {
    res.render("../views/productoDetail", { products }); 
  })
};

