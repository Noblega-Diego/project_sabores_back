'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rubrogenerals',[
      {
        id:1,
        denominacion:"Bebidas"
      },
      {
        id:2,
        denominacion:"Ensaladas"
      },
      {
        id:3,
        denominacion:"Hamburguezas"
      },
      {
        id:4,
        denominacion:"Pizzas"
      },
      {
        id:5,
        denominacion:"Lomos"
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rubrogenerals',null,{})
  }
};
