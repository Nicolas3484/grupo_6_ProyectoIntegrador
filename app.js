const path = require('path');
const express = require('express');
const app = express();
const port = 3030;
const carritoRouter = require('./routers/carrito')

// Configs
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static())
app.use(express.json())
app.use(express.static(path.join,__dirname,'..','public'))
/* ROUTING */
app.use('/cart',carritoRouter)
app.use()

// Rutas
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
  })
  app.get("/home", (req, res) => {
    res.redirect('/');
  });

  
// Server
app.listen(port,() => console.log(`http://localhost:${port}`));