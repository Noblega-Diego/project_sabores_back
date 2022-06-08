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
      this.belongsTo(models.Pedido, {
        foreignKey: "PedidoId"
      })
      this.belongsTo(models.ArticuloManufacturado, {
        foreignKey: "ArticuloManufacturadoId"
      })
    }
  }
  DetallePedido.init({
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetallePedido',
  });
  return DetallePedido;
};