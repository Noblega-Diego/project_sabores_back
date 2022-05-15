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
      this.belongsTo(models.RubroGeneral, {
        foreignKey: 'id'
      })
    }
  }
  ArticuloManufacturado.init({
    denominacion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    tiempoeEstimadoCocina: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticuloManufacturado',
  });
  return ArticuloManufacturado;
};