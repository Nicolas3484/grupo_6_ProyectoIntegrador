const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
const partials = require("express-partials")

// Configs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/* Middleware */
app.use(partials())
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
// Rutas
const authRoutes = require("./src/routes/authentication.routes");
const cartRoutes = require("./src/routes/cart.routes");
const otherRouthes = require("./src/routes/other.routes");
const productRoutes = require("./src/routes/products.routes");
const adminRoutes = require("./src/routes/admin.routes");


app.use("/",otherRouthes)
app.use("/admin", adminRoutes)
app.use("/producto", productRoutes)
app.use("/registrar", authRoutes)
app.use("/iniciar", authRoutes)
app.use("/carrito", cartRoutes)
 module.exports = app;
// Server
app.listen(port, () => console.log(`http://localhost:${port}`));
