'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PrecioArticuloManufacturados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      articuloManufacturadoId: {
        type: Sequelize.INTEGER,
        references:{
          model: "ArticuloManufacturados",
          key: "id"
        }
      },
      precioVenta: {
        type: Sequelize.DECIMAL
      },
      precioCompra: {
        type: Sequelize.DECIMAL
      },
      fecha: {
        type: Sequelize.DATE
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PrecioArticuloManufacturados');
  }
};