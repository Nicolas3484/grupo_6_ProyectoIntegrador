const express = require('express');
const app = express();
const path = require('path');
const partials = require("express-partials");
const bodyParser = require('body-parser');
const methodOverride = require("method-override")

// Configuración
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"))

// Rutas
const authRoutes = require("./src/routes/authentication.routes");
const cartRoutes = require("./src/routes/cart.routes");
const otherRoutes = require("./src/routes/other.routes");
const productRoutes = require("./src/routes/products.routes");
const adminRoutes = require("./src/routes/admin.routes");

app.use("/", otherRoutes);
app.use("/admin", adminRoutes);
app.use("/", productRoutes);
app.use("/", authRoutes);
app.use("/iniciar", authRoutes);
app.use("/carrito", cartRoutes);

// Manejo de Errores (ejemplo)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});
// Servidor
const port = 3030;
app.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`));

module.exports = app;
