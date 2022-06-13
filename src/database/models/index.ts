import { Sequelize } from 'sequelize-typescript'
import {Usuario} from "./Usuario";
import {RubroInsumo} from "./RubroInsumo";
import {RubroGeneral} from "./RubroGeneral";
import {PrecioInsumo} from "./PrecioInsumo";
import { Rol } from './Rol';
import {PrecioArticuloManufacturado} from "./PrecioArticuloManufacturado";
import {Pedido} from "./Pedido";
import {Insumo} from "./Insumo";
import {Domicilio} from "./Domicilio";
import {DetallePedido} from "./DetallePedido";
import {Categoria} from "./Categoria";
import {ArticuloManufacturado} from "./ArticuloManufacturado";
import {ArticuloManufacturadoDetalle} from "./ArticuloManufacturadoDetalle";
const env = process.env.NODE_ENV || 'development';
import config from './../config/config';

// @ts-ignore
const sequelize = new Sequelize({...(config[env]),
    dialect: 'mysql',
    storage: ':memory:',
    models: [
        Usuario,
        RubroInsumo,
        RubroGeneral,
        Rol,
        PrecioInsumo,
        PrecioArticuloManufacturado,
        Pedido,
        Insumo,
        Domicilio,
        DetallePedido,
        Categoria,
        ArticuloManufacturado,
        ArticuloManufacturadoDetalle,
        ]
})
export {sequelize}