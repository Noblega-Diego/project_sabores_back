'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.DetallePedido)
    }
  }
  Pedido.init({
    numero: DataTypes.INTEGER,
    tipoEntrega: DataTypes.ENUM('local', 'envio'),
    horaEstimadaFin: DataTypes.DATE,
    fecha: DataTypes.DATE,
    estado: DataTypes.ENUM('pendiente', 'aprobado', 'proceso', 'finalizado', 'camino', 'entregado')
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};