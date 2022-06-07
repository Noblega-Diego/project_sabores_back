'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('PrecioInsumos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            insumoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Insumos",
                    key: "id"
                }
            },
            precioVenta: {
                type: Sequelize.DOUBLE
            },
            precioCompra: {
                type: Sequelize.DOUBLE
            },
            fecha: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('PrecioInsumos');
    }
};