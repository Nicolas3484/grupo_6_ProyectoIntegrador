'use strict';
const productsJSON = require("../products.json")

const productsDB = productsJSON.map(c => {
  return {
    titulo: c.titulo,
    subtitulo: c.subtitulo,
    precio: c.precio,
    descripcion: c.descripcion,
    autores: c.autores,
    imagen: c.imagen,
    disponible: c.disponible,
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


      await queryInterface.bulkInsert('products',productsDB
     , {});

  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('products', null, {});

  }
};
