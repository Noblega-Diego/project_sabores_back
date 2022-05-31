'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetallePedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ArticuloManufacturado, {
        foreignKey: "pedidoId"
      })
      this.belongsTo(models.ArticuloManufacturado, {
        foreignKey: "articuloManufacturadoId"
      })
    }
  }
  DetallePedido.init({
    cantidad: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'DetallePedido',
  });
  return DetallePedido;
};