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

  app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));
  })
  
// Server
app.listen(port,() => console.log(`http://localhost:${port}`));