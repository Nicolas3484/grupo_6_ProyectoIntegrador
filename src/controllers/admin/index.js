const { newProductForm, storeProduct } = require("./storeProduct.controller");

module.exports = {
    listProducts: require("./listProduct.controller"),
    asd: require("./dashboard"),
    newProductForm,
    storeProduct,
    updateProduct: require("./updateProduct.controller"),
    editProduct: require("./editProduct.controller"),
    eliminar: require("./eliminar.controller"),
    removeProduct: require("./removeProduct.controller"),
    romperla: require("./romperla.controller"),
  };