'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Domicilio),
                this.belongsTo(models.Rol, {
                    foreignKey: 'RolId'
                })
        }
    }
    Usuario.init({
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        usuario: DataTypes.STRING,
        clave: DataTypes.STRING,
        email: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        rolId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Usuario',
    });
    return Usuario;
};