
const db = require("../../database/models");

module.exports = (req, res) => {


  db.product.findAll()
    .then((products) => {
      res.render("admin/listProduct", {
        products,
      });
    })
    .catch((err) => {
      console.error("Error al obtener productos:", err);
    });
};
