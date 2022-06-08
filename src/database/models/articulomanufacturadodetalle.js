'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ArticuloManufacturadoDetalle extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Insumo, {
                foreignKey: 'InsumoId'
            })
            this.belongsTo(models.ArticuloManufacturado, {
                foreignKey: 'ArticuloManufacturadoId'
            })
        }
    }
    ArticuloManufacturadoDetalle.init({
        cantidad: DataTypes.DOUBLE,
        unidadDeMedida: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ArticuloManufacturadoDetalle',
    });
    return ArticuloManufacturadoDetalle;
};