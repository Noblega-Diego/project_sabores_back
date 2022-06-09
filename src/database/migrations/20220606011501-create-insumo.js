'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Insumos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            rubroInsumoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "RubroInsumos",
                    key: "id"
                }
            },
            denominacion: {
                type: Sequelize.STRING
            },
            imagen: {
                type: Sequelize.STRING
            },
            unidadDeMedida: {
                type: Sequelize.STRING
            },
            stockMinimo: {
                type: Sequelize.DOUBLE
            },
            stock: {
                type: Sequelize.DOUBLE
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
        await queryInterface.dropTable('Insumos');
    }
};