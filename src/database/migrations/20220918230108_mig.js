const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "RubroInsumos", deps: []
 * createTable() => "RubroGenerals", deps: []
 * createTable() => "Rols", deps: []
 * createTable() => "Pedidos", deps: []
 * createTable() => "categorias", deps: []
 * createTable() => "Estados", deps: []
 * createTable() => "UnidadDeMedidas", deps: []
 * createTable() => "Usuarios", deps: [Rols]
 * createTable() => "Insumos", deps: [RubroInsumos, UnidadDeMedidas]
 * createTable() => "ArticuloManufacturados", deps: [RubroGenerals, categorias]
 * createTable() => "PrecioInsumos", deps: [Insumos]
 * createTable() => "Domicilios", deps: [Usuarios]
 * createTable() => "PrecioArticuloManufacturados", deps: [ArticuloManufacturados]
 * createTable() => "DetallePedidos", deps: [Pedidos, ArticuloManufacturados]
 * createTable() => "ArticuloManufacturadoDetalles", deps: [Insumos, ArticuloManufacturados, UnidadDeMedidas]
 * createTable() => "EstadoPedidos", deps: [Pedidos, Estados]
 *
 */

const info = {
  revision: 1,
  name: "mig",
  created: "2022-09-18T23:01:08.833Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "RubroInsumos",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        denominacion: { type: Sequelize.STRING, field: "denominacion" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "RubroGenerals",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        denominacion: { type: Sequelize.STRING, field: "denominacion" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Rols",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        denominacion: { type: Sequelize.STRING, field: "denominacion" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Pedidos",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        numero: { type: Sequelize.NUMBER, field: "numero" },
        tipoEntrega: {
          type: Sequelize.ENUM("local", "envio"),
          field: "tipoEntrega",
        },
        horaEstimadaFin: { type: Sequelize.DATE, field: "horaEstimadaFin" },
        fecha: { type: Sequelize.DATE, field: "fecha" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "categorias",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        denominacion: { type: Sequelize.STRING, field: "denominacion" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Estados",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        estado: { type: Sequelize.STRING, field: "estado" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "UnidadDeMedidas",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        denominacion: { type: Sequelize.STRING, field: "denominacion" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Usuarios",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nombre: { type: Sequelize.STRING, field: "nombre" },
        apellido: { type: Sequelize.STRING, field: "apellido" },
        usuario: { type: Sequelize.STRING, field: "usuario" },
        clave: { type: Sequelize.STRING, field: "clave" },
        email: { type: Sequelize.STRING, field: "email" },
        telefono: { type: Sequelize.NUMBER, field: "telefono" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        rolId: {
          type: Sequelize.INTEGER,
          field: "rolId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Rols", key: "id" },
          name: "rolId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Insumos",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        denominacion: { type: Sequelize.STRING, field: "denominacion" },
        imagen: { type: Sequelize.STRING, field: "imagen" },
        stockMinimo: { type: Sequelize.NUMBER, field: "stockMinimo" },
        stock: { type: Sequelize.NUMBER, field: "stock" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        rubroInsumoId: {
          type: Sequelize.INTEGER,
          field: "rubroInsumoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "RubroInsumos", key: "id" },
          name: "rubroInsumoId",
          allowNull: true,
        },
        unidadDeMedidaId: {
          type: Sequelize.INTEGER,
          field: "unidadDeMedidaId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "UnidadDeMedidas", key: "id" },
          name: "unidadDeMedidaId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "ArticuloManufacturados",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        denominacion: { type: Sequelize.STRING, field: "denominacion" },
        imagen: { type: Sequelize.STRING, field: "imagen" },
        tiempoEstimadoCocina: {
          type: Sequelize.NUMBER,
          field: "tiempoEstimadoCocina",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        rubroGeneralId: {
          type: Sequelize.INTEGER,
          field: "rubroGeneralId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "RubroGenerals", key: "id" },
          name: "rubroGeneralId",
          allowNull: true,
        },
        categoriaId: {
          type: Sequelize.INTEGER,
          field: "categoriaId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "categorias", key: "id" },
          name: "categoriaId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "PrecioInsumos",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        precioVenta: { type: Sequelize.NUMBER, field: "precioVenta" },
        precioCompra: { type: Sequelize.NUMBER, field: "precioCompra" },
        fecha: { type: Sequelize.DATE, field: "fecha" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        insumoId: {
          type: Sequelize.INTEGER,
          field: "insumoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Insumos", key: "id" },
          name: "insumoId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Domicilios",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        calle: { type: Sequelize.STRING, field: "calle" },
        numero: { type: Sequelize.NUMBER, field: "numero" },
        localidad: { type: Sequelize.STRING, field: "localidad" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        usuarioId: {
          type: Sequelize.INTEGER,
          field: "usuarioId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Usuarios", key: "id" },
          name: "usuarioId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "PrecioArticuloManufacturados",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        precioVenta: { type: Sequelize.NUMBER, field: "precioVenta" },
        precioCompra: { type: Sequelize.NUMBER, field: "precioCompra" },
        fecha: { type: Sequelize.DATE, field: "fecha" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        articuloManufacturadoId: {
          type: Sequelize.INTEGER,
          field: "articuloManufacturadoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "ArticuloManufacturados", key: "id" },
          name: "articuloManufacturadoId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "DetallePedidos",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        cantidad: { type: Sequelize.NUMBER, field: "cantidad" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        pedidoId: {
          type: Sequelize.INTEGER,
          field: "pedidoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Pedidos", key: "id" },
          name: "pedidoId",
          allowNull: true,
        },
        articuloManufacturadoId: {
          type: Sequelize.INTEGER,
          field: "articuloManufacturadoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "ArticuloManufacturados", key: "id" },
          name: "articuloManufacturadoId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "ArticuloManufacturadoDetalles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        cantidad: { type: Sequelize.NUMBER, field: "cantidad" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        insumoId: {
          type: Sequelize.INTEGER,
          field: "insumoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Insumos", key: "id" },
          name: "insumoId",
          allowNull: true,
        },
        articuloManufacturadoId: {
          type: Sequelize.INTEGER,
          field: "articuloManufacturadoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "ArticuloManufacturados", key: "id" },
          name: "articuloManufacturadoId",
          allowNull: true,
        },
        unidadDeMedidaId: {
          type: Sequelize.INTEGER,
          field: "unidadDeMedidaId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "UnidadDeMedidas", key: "id" },
          name: "unidadDeMedidaId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "EstadoPedidos",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        fecha: { type: Sequelize.DATE, field: "fecha" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        pedidoId: {
          type: Sequelize.INTEGER,
          field: "pedidoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Pedidos", key: "id" },
          name: "pedidoId",
          allowNull: true,
        },
        estadoId: {
          type: Sequelize.INTEGER,
          field: "estadoId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Estados", key: "id" },
          name: "estadoId",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Usuarios", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["RubroInsumos", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["RubroGenerals", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Rols", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["PrecioInsumos", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["PrecioArticuloManufacturados", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Pedidos", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Insumos", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Domicilios", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["DetallePedidos", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["categorias", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["ArticuloManufacturados", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["ArticuloManufacturadoDetalles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Estados", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["EstadoPedidos", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["UnidadDeMedidas", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
