/* const path = require("path");
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
}; */


const db = require("../../database/models");

const productsController = {
    // esto muestra
    newProductForm: (req, res) => {
        res.render("admin/agregarProducto");
    },

    // esto guarda 
    storeProduct: async (req, res) => {
        console.log("Body de la solicitud POST:", req.body);
        const { title, price, description } = req.body;
        const imagen = req.file ? req.file.filename : "not-image";

        try {
            const newProduct = await db.Product.create({
                titulo: title,
                precio: price,
                descripcion: description,
                imagen: imagen
            });
            res.redirect("/admin/productos");
        } catch (err) {
            console.error("Error al guardar el producto en la base de datos:", err);
            res.status(500).send("Error interno del servidor");
        }
    }
};

module.exports = productsController;