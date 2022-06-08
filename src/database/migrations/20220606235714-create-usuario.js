'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Usuarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            rolId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Rols",
                    key: "id"
                }
            },
            nombre: {
                type: Sequelize.STRING
            },
            apellido: {
                type: Sequelize.STRING
            },
            usuario: {
                type: Sequelize.STRING
            },
            clave: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            telefono: {
                type: Sequelize.INTEGER
            },
            rolId: {
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
        await queryInterface.dropTable('Usuarios');
    }
};