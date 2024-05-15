'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderProducts.belongsTo(models.orders, {
        foreignKey: 'orderId',
        as: 'order'
      });
      orderProducts.belongsTo(models.product, {
        foreignKey: 'productId',
        as: 'products'
      });
    }
  }
  orderProducts.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderProducts',
  });
  return orderProducts;
};