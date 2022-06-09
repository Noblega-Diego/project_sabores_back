'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ArticuloManufacturado extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.PrecioArticuloManufacturado)
            this.hasMany(models.ArticuloManufacturadoDetalle)
            this.belongsTo(models.RubroGeneral, {
                foreignKey: 'RubroGeneralId'
            })
            this.belongsTo(models.Categoria, {
                as:'Categoria',
                foreignKey: 'CategoriaId'
            })
        }
    }
    ArticuloManufacturado.init({
        denominacion: DataTypes.STRING,
        imagen: DataTypes.STRING,
        tiempoEstimadoCocina: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ArticuloManufacturado',
    });
    return ArticuloManufacturado;
};