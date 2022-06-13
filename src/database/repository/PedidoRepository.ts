import {BaseRepository} from './BaseRepositoty';
import {Pedido} from "../models/Pedido";
import {DetallePedido} from "../models/DetallePedido";
import {ArticuloManufacturado} from "../models/ArticuloManufacturado";

import {sequelize} from "../models";


export class PedidoRepository implements BaseRepository<number, Pedido>{
    async getAll(): Promise<Pedido[]> {
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

    async update(id: number, obj: Pedido): Promise<any> {
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
            for (const detalle of obj.detalle) {
                await DetallePedido.create({...detalle,pedidoId:id},{transaction:t})
            }
            return id;
        })
        return await this.getById(id);
    }
}