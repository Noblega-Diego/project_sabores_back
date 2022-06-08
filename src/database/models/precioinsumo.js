'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PrecioInsumo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Insumo, {
                foreignKey: 'InsumoId'
            })
        }
    }
    PrecioInsumo.init({
        precioVenta: DataTypes.DOUBLE,
        precioCompra: DataTypes.DOUBLE,
        fecha: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'PrecioInsumo',
    });
    return PrecioInsumo;
};