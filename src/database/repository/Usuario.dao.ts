import {BaseRepository} from './BaseRepositoty';
import {ModelStatic} from "sequelize";

const Usuario:ModelStatic<any> = require('./../models').Usuario
const Domicilio:ModelStatic<any> = require('./../models').Domicilio
const Rol:ModelStatic<any> = require('./../models').Rol

export class UsuarioDao implements BaseRepository<number, any>{
    async getAll(): Promise<any> {
        return await Usuario.findAll({include: [ { model:Rol }, { model:Domicilio, order: [['fecha', 'DESC']], limit:1} ]})
    }

    async getById(id: number): Promise<any> {
        return await Usuario.findByPk(id, {include:[{ model:Rol }, { model:Domicilio, order: [['fecha', 'DESC']], limit:10 }]})
    }

    async removeOne(id: number): Promise<void> {
        await Usuario.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: any): Promise<any> {
        await Usuario.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }
}