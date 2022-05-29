'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ArticuloInsumo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.PrecioArticuloInsumo)
        }
    }
    ArticuloInsumo.init({
        denominacion: DataTypes.STRING,
        imagen: DataTypes.STRING,
        stockminimo: DataTypes.DOUBLE,
        unidadMedida: DataTypes.STRING,
        esInsumo: DataTypes.BOLEAN
    }, {
        sequelize,
        modelName: 'ArticuloInsumo',
    });
    return ArticuloInsumo;
};