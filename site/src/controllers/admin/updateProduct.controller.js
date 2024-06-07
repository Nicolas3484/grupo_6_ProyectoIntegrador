const db = require("../../database/models");

module.exports = (req, res) => {
  const { id } = req.params;
  const product = db.product.findByPk(id);

  product.then((product) => {
    res.render("admin/updateProduct", { product });
  }).catch((err) => {
    res.send(err.message);
  });
};
