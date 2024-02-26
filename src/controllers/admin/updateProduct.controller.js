/* module.exports = (req, res) => {
    const products = require("../../database/products.json"); 
    const { id } = req.params; 
    const product = products.find((p) => p.id === +id); 
    res.render("admin/updateProduct", { product}, (err,) => {
      err && res.send(err.message);
    });
  }; */

  const products = require("../../database/products.json")
  module.exports = (req, res) => {
    res.render("admin/updateProduct", { 
      products
     })} 