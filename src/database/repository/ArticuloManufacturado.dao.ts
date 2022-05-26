import {BaseRepository} from './BaseRepositoty';
import {ModelStatic} from "sequelize";

const ArticuloManufacturado:ModelStatic<any> = require('./../models').ArticuloManufacturado
const PrecioArticuloManufacturado:ModelStatic<any> = require('./../models').PrecioArticuloManufacturado
const RubroGeneral:ModelStatic<any> = require('./../models').RubroGeneral

export class ArticuloManufacturadoDao implements BaseRepository<number, any>{
    async getAll(): Promise<any> {
        return await ArticuloManufacturado.findAll({include: [ { model:RubroGeneral }, { model:PrecioArticuloManufacturado, order: [['fecha', 'DESC']], limit:1} ]})
    }

    async getById(id: number): Promise<any> {
        return await ArticuloManufacturado.findByPk(id, {include:[{ model:RubroGeneral }, { model:PrecioArticuloManufacturado, order: [['fecha', 'DESC']], limit:10 }]})
    }

    async removeOne(id: number): Promise<void> {
        await ArticuloManufacturado.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: any): Promise<any> {
        await ArticuloManufacturado.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }
}