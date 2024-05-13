/*const { saveData, loadData } = require("../../database");


module.exports = (req, res) => {
const products = loadData()
    
  const {id} = req.params

  const productLessOne = products.filter(p => p.id !== +id)

  saveData(productLessOne);

  res.redirect("/admin/productos")
};
*/
const db = require("../../database/models")

module.exports = (req, res) => {
  const {id} = req.params
    
    db.Product.destroy({
      where:{
        id
      }
    })
    .then(() => {
      res.redirect("/admin/productos")
    })
  

};