/* MODULOS */
const express = require('express');

const path = require('path');
const partials = require("express-partials");
const bodyParser = require('body-parser');
const methodOverride = require("method-override")
const session = require("express-session");
const createError = require('http-errors');
const logger = require('morgan');
const checkUsser = require("./middlewares/checkSession")
//rutas
const authRoutes = require("./routes/authentication.routes");
const cartRoutes = require("./routes/cart.routes");
const otherRoutes = require("./routes/other.routes");
const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");
// Rutas API
const apiUsersRoutes = require("./routes/api/users.api.");
const apiProductsRoutes = require('./routes/api/products.api');
const apiOrderRoutes = require('./routes/api/order.api');

const app = express();

// Configuración
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(session({ secret: "galletitas" }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"))

app.use(checkUsser)







app.use("/", otherRoutes);
app.use("/admin", adminRoutes);
app.use("/", productRoutes);
app.use("/", authRoutes);
app.use("/iniciar", authRoutes);
app.use("/carrito", cartRoutes);

/* ENRUTADOR API */
app.use("/api", apiUsersRoutes);
app.use('/api', apiProductsRoutes);
app.use('/api/order', apiOrderRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Servidor
const port = 3030;
app.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`));

module.exports = app;
