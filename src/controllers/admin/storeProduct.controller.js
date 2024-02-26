const path = require("path")

let products = require("../../database/products.json");
const fs = require("fs");

module.exports = (req, res) => {

  
  const { title, price, description,} = req.body;


  const newId = products[products.length - 1].id + 1;


  const newProduct = {
    id: newId,
    title,
    price,
    description,
  };

 
  products = [...products, newProduct];

  products = JSON.stringify(products, null, 3);
  const pathProducts = path.join(__dirname, "../../database/products.json");
  fs.writeFileSync(pathProducts, products, "utf-8");

  return res.redirect("/admin/productos")
};
