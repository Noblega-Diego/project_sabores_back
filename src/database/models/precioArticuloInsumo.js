'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PrecioArticuloInsumo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.ArticuloManufacturado, {
                foreignKey: 'PrecioArticuloInsumoId'
            });
        }
    }
    PrecioArticuloInsumo.init({
        precioCostoArticuloInsumo: DataTypes.DOUBLE,
        precioVentaArticuloInsumo: DataTypes.DOUBLE,
        fecha: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'PrecioArticuloInsumo',
    });
    return PrecioArticuloInsumo;
};