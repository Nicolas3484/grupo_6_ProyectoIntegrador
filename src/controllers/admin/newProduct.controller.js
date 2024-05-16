/* const products = require("../../database/products.json")
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

const db = require("../../database/models")
module.exports = (req,res) => {
  res.render("admin/agregarProducto")}
  /* create: function(req,res){
    const { title, price, description, imagePrincipal} = req.body
    db.product.create({
      title, price, description, imagePrincipal,
    })
    .then(products => {
      res.render("admin/productos", products)
    })
  }
} */