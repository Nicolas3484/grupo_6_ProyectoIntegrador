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
const authRoutes = require("./routes/authentication.routes");
const cartRoutes = require("./routes/cart.routes");
const otherRouthes = require("./routes/other.routes");
const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");

app.use("/admin", adminRoutes)
 module.exports = app;
// Server
app.listen(port, () => console.log(`http://localhost:${port}`));
