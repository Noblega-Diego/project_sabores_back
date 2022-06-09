'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rubroinsumos',[
      {
        id:1,
        denominacion:"ingredientes"
      },
      {
        id:2,
        denominacion:"especias"
      },
      {
        id:3,
        denominacion:"vegetales"
      },
      {
        id:4,
        denominacion:"premanufacturados"
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rubroinsumos',null,{})
  }
};
