/* 
module.exports = (req,res) => {
    const arrProductos = [
        {
            id:1,
            name: "Galaxia"
        },
        {
            id:2,
            name:"Cuadro bonito pero sucio"
        },
        {
            id: 3,
            name: "Cuadro de Messi levantando la copa del mundo"
        }

    ];
    const idProduct = parseInt(req.params.id)
    const nameCategory = req.params.category
    const priceQuery = req.query.precio
    const categoryQuery = req.query.category
    const productFind = arrProductos.find(product => product.id === idProduct)
   if(!productFind){
    
   return res.send("El producto con el numero de ID " + idProduct + " no existe")
}
   if(nameCategory || categoryQuery){
    return res.send("ESTE PRODUCTO CON EL NUMERO DE ID: " + productFind.name + " Y SU CATEGORIA ES: " + (nameCategory ? nameCategory : categoryQuery) + ", el precio es de: $" + priceQuery)
    } 
    res.send("ESTE PRODUCTO CON EL NUMERO DE ID: "  + productFind.name)
} */
module.exports = (req,res) =>{
    const fs = require('fs')
    const path = require('path')
    let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../../database/products.json'), 'utf-8'))
    const id = req.params.id;
const searchProduct = products.find((p)=>{
return p.id == +id})
    res.render("productoDetail",{
        producto: searchProduct,
    })
}