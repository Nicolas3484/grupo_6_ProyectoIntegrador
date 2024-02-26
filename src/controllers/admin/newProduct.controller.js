 const products = require("../../database/products.json")
module.exports = (req, res) => {
  res.render("admin/agregarProducto", { 
    products
   })} 

/*    module.exports = (req, res) => {
    const products = require("../../database/products.json")
  
    res.render("admin/createProduct", {
      products
   
    })
  }; */