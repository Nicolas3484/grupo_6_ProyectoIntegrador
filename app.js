const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

// Configs
app.use(express.static('public'))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))

// Rutas
app.get('/',(req,res) => {
    res.render(path.join(__dirname,'./views/index.ejs'));
  })
  app.get("/home", (req, res) => {
    res.render('/');
  });
  app.get('/register',(req,res) => {
    res.render(path.join(__dirname,'./views/register.ejs'));
  })
  app.get('/login',(req,res) => {
    res.render(path.join(__dirname,'./views/login.ejs'));
  })
  app.get('/Producto',(req,res) => {
    res.render(path.join(__dirname,'./views/productoDetail.ejs'));
  })
  app.get('/productCart',(req,res) => {
    res.render(path.join(__dirname,'./views/productCart.ejs'));
  })
// Server
app.listen(port,() => console.log(`http://localhost:${port}`));