'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('precioarticulomanufacturados',[
      {
        precioVenta: 300,
        precioCompra: 200,
        fecha: new Date(2022, 5,4),
        articuloManufacturadoId:1
      },
      {
        precioVenta: 320,
        precioCompra: 208,
        fecha: new Date(2022, 6,11),
        articuloManufacturadoId:1
      },
      {
        precioVenta: 349,
        precioCompra: 234,
        fecha: new Date(2022, 7,25),
        articuloManufacturadoId:1
      },
      {
        precioVenta: 280,
        precioCompra: 234,
        fecha: new Date(2022, 5,4),
        articuloManufacturadoId:2
      },
      {
        precioVenta: 300,
        precioCompra: 250,
        fecha: new Date(2022, 6,5),
        articuloManufacturadoId:2
      },
      {
        precioVenta: 200,
        precioCompra: 110,
        fecha: new Date(2022, 5,4),
        articuloManufacturadoId:3
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('precioarticulomanufacturados', null, {});
  }
};
