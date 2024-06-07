const db = require("../../database/models")

module.exports = (req, res) => {

  db.product.findAll()

  .then((products) => {
    res.render("../views/index", {
      products
    })
  })
};