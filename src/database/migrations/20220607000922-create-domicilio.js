'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Domicilios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            usuarioId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Usuarios",
                    key: "id"
                }
            },
            calle: {
                type: Sequelize.STRING
            },
            numero: {
                type: Sequelize.INTEGER
            },
            localidad: {
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
        await queryInterface.dropTable('Domicilios');
    }
};