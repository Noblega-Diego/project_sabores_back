'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArticuloManufacturados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rubroGeneralId: {
        type: Sequelize.INTEGER,
        references:{
          model: "RubroGenerals",
          key: "id"
        }
      },
      denominacion: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      tiempoEstimadoCocina: {
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
    await queryInterface.dropTable('ArticuloManufacturados');
  }
};