const path = require("path");
const fs = require("fs");

const { loadData } = require("../../database");

module.exports = (req, res) => {
  let products = loadData()
  console.log("Body de la solicitud POST:", req.body); 


  const { title, price, description, autor } = req.body;

  let newId = 1;
  if (products.length > 0) {
    newId = products[products.length - 1].id + 1;
  }
  
  const newProduct = {
    id: newId,
    titulo: title,
    precio: price,
    descripcion: description,
    autores: autor,
    imagen: req.file ? req.file.filename : "not-image"
    
  };

  products.push(newProduct);

  const pathProducts = path.join(__dirname, "../../database/products.json");
  fs.writeFile(pathProducts, JSON.stringify(products, null, 3), "utf-8", (err) => {
    if (err) {
      console.error("Error al escribir en el archivo JSON de productos:", err);
      return res.status(500).send("Error interno del servidor");
    }
    res.redirect("/admin/productos");
  });
};
