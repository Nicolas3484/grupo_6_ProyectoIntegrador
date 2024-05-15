
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category'
      });

      Product.belongsToMany(models.orders, {
        through: 'orderProducts',
        foreignKey: 'productId',
        otherKey: 'orderId',
        as: 'orders'
      });
    }
  }
  Product.init({
    titulo: DataTypes.STRING,
    subtitulo: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    autores: DataTypes.STRING,
    imagen: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN,
    categoryId: DataTypes.STRING
  }, {
/*     modelName: 'Product',
    onUpdate: 'CASCADE',
    onDelete: "CASCADE",
    paranoid: true */
  
    sequelize,
    modelName: 'product',
  });
  return Product;
};