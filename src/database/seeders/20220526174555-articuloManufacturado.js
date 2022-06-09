'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articulomanufacturados',[
      {
        id:1,
        denominacion:"Pizza Calabreza",
        imagen:"https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780",
        tiempoEstimadoCocina:30,
        rubroGeneralId:4,
        categoriaId:1
      },
      {
        id:2,
        denominacion:"Pizza Napolitana",
        imagen:"https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780",
        tiempoEstimadoCocina:28,
        rubroGeneralId:4,
        categoriaId:1
      },
      {
        id:3,
        denominacion:"Ensalada con Camarones",
        imagen:"https://images.unsplash.com/photo-1551248429-40975aa4de74?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890",
        tiempoEstimadoCocina:30,
        rubroGeneralId:2,
        categoriaId:1
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articulomanufacturados', null, {});
  }
};
