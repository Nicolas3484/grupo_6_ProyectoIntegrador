'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    titulo: DataTypes.STRING,
    subtitulo: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    autores: DataTypes.STRING,
    imagen: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};