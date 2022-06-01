'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetallePedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        references:{
          model: "Pedidos",
          key: "id"
        }
      },
      articuloManufacturadoId: {
        type: Sequelize.INTEGER,
        references:{
          model: "ArticuloManufacturados",
          key: "id"
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetallePedidos');
  }
};