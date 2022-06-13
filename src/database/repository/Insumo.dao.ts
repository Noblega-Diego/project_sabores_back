import {BaseRepository} from './BaseRepositoty';
import {Insumo} from "../models/Insumo";
import {RubroInsumo} from "../models/RubroInsumo";
import {PrecioInsumo} from "../models/PrecioInsumo";


export class InsumoDao implements BaseRepository<number, Insumo>{
    async getAll(): Promise<Insumo[]> {
        return await Insumo.findAll({include: [ { model:RubroInsumo }, { model:PrecioInsumo, order: [['fecha', 'DESC']], limit:1} ]})
    }

    async getById(id: number): Promise<Insumo> {
        return (await Insumo.findByPk(id, {include:[{ model:RubroInsumo }, { model:PrecioInsumo, order: [['fecha', 'DESC']], limit:10 }]}))!
    }

    async removeOne(id: number): Promise<void> {
        await Insumo.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: any): Promise<Insumo> {
        await Insumo.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }

    async create(obj: any): Promise<Insumo> {
        return await Insumo.create(obj)
    }

}