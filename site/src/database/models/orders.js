'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user'
      });
      Order.belongsToMany(models.product, {
        through: models.orderProducts,
        foreignKey: 'orderId',
        as: 'Product'
      });
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    state: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return Order;
};