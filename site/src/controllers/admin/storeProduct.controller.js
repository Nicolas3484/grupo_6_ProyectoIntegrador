 const path = require("path");
const fs = require("fs");

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
       /*  const imagen = req.file ? req.file.filename : "not-image"; */

        try {
            const newProduct = await db.product.create({
                titulo: title,
                precio: price,
                descripcion: description,
                imagen: req.file ? req.file.filename : "not-image"
            });
            res.redirect("/admin/productos");
        } catch (err) {
            console.error("Error al guardar el producto en la base de datos:", err);
            res.status(500).send("Error interno del servidor");
        }
    }
};

module.exports = productsController;