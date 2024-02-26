const products = require("../../database/products.json")
module.exports = (req, res) => {
  res.render("admin/asd", { 
    products
   })}