'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.addresses, {
        foreignKey: 'adressId',
        as: 'addresses'
      })

      User.hasMany(models.orders, {
        foreignKey: 'userId',
        as: 'orders'
      })
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    avatar: DataTypes.INTEGER,
    adressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};