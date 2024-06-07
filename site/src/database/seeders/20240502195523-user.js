'use strict';
const usersJSON = require("../usuarios.json")
const usersDB = usersJSON.map(c => {
  return {
    nombre: c.nombre,
    email: c.email,
    password: c.contraseña,
    role: c.role,
    avatar: c.avatar
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', usersDB, {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('users', null, {});
    
  }
};
