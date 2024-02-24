const path = require('path');
const express = require('express');
const app = express();
const port = 3030;

// Configs
app.use(express.static('public'))

// Rutas
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
  })
  app.get("/home", (req, res) => {
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
  app.get('/admin',(req,res) => {
    res.sendFile(path.join(__dirname,'./admin/adminListProduct.html'));
  })
  app.get('/admin1',(req,res) => {
    res.sendFile(path.join(__dirname,'./admin/adminProducto.html'));
  })
  app.get('/asd',(req,res) => {
    res.sendFile(path.join(__dirname,'./admin/asd.html'));
  })


  
// Server
app.listen(port,() => console.log(`http://localhost:${port}`));