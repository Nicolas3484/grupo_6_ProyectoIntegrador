const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

// Configs
app.use(express.static('public'))

// Rutas
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.ejs'));
  })
  app.get("/home", (req, res) => {
    res.redirect('/');
  });
  app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.ejs'));
  })
  app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.ejs'));
  })
  app.get('/Producto',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/productoDetail.ejs'));
  })
  app.get('/productCart',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/productCart.ejs'));
  })
// Server
app.listen(port,() => console.log(`http://localhost:${port}`));