import {BaseRepository} from './BaseRepositoty';
import {ModelStatic} from "sequelize";

const Insumo:ModelStatic<any> = require('./../models').Insumo
const PrecioInsumo:ModelStatic<any> = require('./../models').PrecioInsumo
const RubroInsumo:ModelStatic<any> = require('./../models').RubroInsumo

export class InsumoDao implements BaseRepository<number, any>{
    async getAll(): Promise<any> {
        return await Insumo.findAll({include: [ { model:RubroInsumo }, { model:PrecioInsumo, order: [['fecha', 'DESC']], limit:1} ]})
    }

    async getById(id: number): Promise<any> {
        return await Insumo.findByPk(id, {include:[{ model:RubroInsumo }, { model:PrecioInsumo, order: [['fecha', 'DESC']], limit:10 }]})
    }

    async removeOne(id: number): Promise<void> {
        await Insumo.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: any): Promise<any> {
        await Insumo.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }

    async create(obj: any): Promise<any> {
        return await Insumo.create(obj)
    }

}