const express = require('express');
const app = express();
const path = require('path');
const port = 3030;


// Configs

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))
/* MIDDLEWARE */
app.use(express.static('public'))
// Rutas
const authRoutes = require("./routes/authentication.routes");
const cartRoutes = require("./routes/cart.routes");
const otherRouthes = require("./routes/other.routes");
const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");


// Server
app.listen(port, () => console.log(`http://localhost:${port}`));