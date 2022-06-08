'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rol extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Usuario)
        }
    }
    Rol.init({
        descripcion: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Rol',
    });
    return Rol;
};