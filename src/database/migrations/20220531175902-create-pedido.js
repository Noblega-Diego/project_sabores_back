'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero: {
        type: Sequelize.INTEGER
      },
      tipoEntrega: {
        type: Sequelize.ENUM('local', 'envio')
      },
      horaEstimadaFin: {
        type: Sequelize.DATE
      },
      fecha: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.ENUM('pendiente', 'aprobado', 'proceso', 'finalizado', 'camino', 'entregado')
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
    await queryInterface.dropTable('Pedidos');
  }
};