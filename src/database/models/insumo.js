'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Insumo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.PrecioInsumo)
            this.hasMany(models.ArticuloManufacturadoDetalle)
            this.belongsTo(models.RubroInsumo, {
                foreignKey: 'RubroInsumoId'
            })
        }
    }
    Insumo.init({
        denominacion: DataTypes.STRING,
        imagen: DataTypes.STRING,
        unidadDeMedida: DataTypes.STRING,
        stockMinimo: DataTypes.DOUBLE,
        stock: DataTypes.DOUBLE
    }, {
        sequelize,
        modelName: 'Insumo',
    });
    return Insumo;
};