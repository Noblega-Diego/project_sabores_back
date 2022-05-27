'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrecioArticuloManufacturado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ArticuloManufacturado,{
        foreignKey: 'ArticuloManufacturadoId'
      });
    }
  }
  PrecioArticuloManufacturado.init({
    precioVenta: DataTypes.DECIMAL,
    precioCompra: DataTypes.DECIMAL,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PrecioArticuloManufacturado',
  });
  return PrecioArticuloManufacturado;
};