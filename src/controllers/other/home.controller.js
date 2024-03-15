const path = require("path");
const fs = require("fs");
module.exports = (req,res) =>{
    const leo = fs.readFileSync(path.join(__dirname,"../../database/products.json"),"utf-8");
    const parseo = JSON.parse(leo);
    
    res.render("index",{producto:parseo})
}