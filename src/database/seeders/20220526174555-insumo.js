'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('insumos',[
      {
        id:1,
        denominacion:"Prepizza",
        imagen:"https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780",
        rubroInsumoId:3,
        unidadDeMedida:'u',
        stockMinimo:10,
        stock:12
      },
      {
        id:2,
        denominacion:"oregano",
        imagen:"https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780",
        rubroInsumoId:1,
        unidadDeMedida:'gr',
        stockMinimo:200,
        stock:500
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('insumos', null, {});
  }
};
