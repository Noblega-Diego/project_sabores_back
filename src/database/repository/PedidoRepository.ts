import {BaseRepository} from './BaseRepositoty';
import {ModelStatic} from "sequelize";

const Pedido:ModelStatic<any> = require('./../models').Pedido
const DetallePedido = require('./../models').DetallePedido
const ArticuloManufacturado = require('./../models').ArticuloManufacturado
const {sequelize}:ModelStatic<any> = require('./../models')

export class PedidoRepository implements BaseRepository<number, any>{
    async getAll(): Promise<any> {
        return await Pedido.findAll({include: [ { model:DetallePedido }]})
    }

    async getById(id: number): Promise<any> {
        return await Pedido.findByPk(id, {include:[{ model:DetallePedido, include:[{model:ArticuloManufacturado}]}]})
    }

    async removeOne(id: number): Promise<void> {
        await Pedido.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: any): Promise<any> {
        await Pedido.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }

    async create(obj: any): Promise<any> {
         const id = await sequelize!.transaction(async (t)=> {
             let count = await Pedido.count()
             let {id} = await Pedido.create({numero: count+1, tipoEntrega: obj.tipoEntrega, estado: obj.estado, fecha:new Date()}, {transaction:t, include:[DetallePedido]});
            for (const detalle of obj.detallePedidos) {
                await DetallePedido.create({...detalle,PedidoId:id},{transaction:t})
            }
            return id;
        })
        return await this.getById(id);
    }
}