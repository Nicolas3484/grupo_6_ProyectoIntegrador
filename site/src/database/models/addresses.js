'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Address.init({
    userId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    streetNumber: DataTypes.STRING,
    city: DataTypes.STRING,
    provincia: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addresses',
  });
  return Address;
};