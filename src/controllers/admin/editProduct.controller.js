const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);
  const { id } = req.params;

  if (errors.isEmpty()) {
    const {
      titulo,
      precio,
      descripcion,
   
    } = req.body;

    db.product.update(
      {
        titulo: titulo.trim(),
        precio: +precio,
        descripcion: descripcion.trim(),
        imagen: req.file ? req.file.filename : null,

      },
      {
        where: {
          id,
        },
      }
    )
      .then(() => {
        res.redirect("/admin/productos");
      })
      .catch((err) => res.send(err.message));
  } else {
    const errorsMapped = errors.mapped();
    const product = db.Product.findByPk(id);

    product.then((product) => {
      res.render(
        "admin/updateProduct",
        { product, errors: errorsMapped, old: req.body },
        (err,) => {
          err && res.send(err.message);
          res.render("partials/dashboard", );
        }
      );
    });
  }
};
