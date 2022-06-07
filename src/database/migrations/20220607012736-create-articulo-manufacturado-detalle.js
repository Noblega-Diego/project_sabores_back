'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ArticuloManufacturadoDetalles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            InsumoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Insumos",
                    key: "id"
                }
            },
            ArticuloManufacturadoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "ArticuloManifacturados",
                    key: "id"
                }
            },
            cantidad: {
                type: Sequelize.DOUBLE
            },
            unidadDeMedida: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('ArticuloManufacturadoDetalles');
    }
};