const path = require('path');
const express = require('express');
const app = express();
const port = 3030;

// Configs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/* Middleware */
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
// Rutas
const adminRoutes = require("./src/routes/admin.routes");

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
  })
/*   app.get("/home", (req, res) => {
    res.redirect('/');
  });
  app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
  })
  app.get('/Producto',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/productoDetail.html'));
  })
  app.get('/Producto1',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/productCart.html'));
  })
/*   app.get('/admin',(req,res) => {
    res.sendFile(path.join(__dirname,'./admin/adminListProduct.html'));
  }) */
/*   app.get('/admin1',(req,res) => {
    res.sendFile(path.join(__dirname,'./src/controllers/admin/adminListProduct.html'));
  })
  app.get('/asd',(req,res) => {
    res.sendFile(path.join(__dirname,'./src/controllers/admin/adminProducto.html'));
  })
  app.get('/admin2',(req,res) => {
    res.sendFile(path.join(__dirname,'./src/controllers/admin/asd.html'));
  })
 */
 app.use("/admin", adminRoutes)
  
 module.exports = app;
// Server
app.listen(port,() => console.log(`http://localhost:${port}`));