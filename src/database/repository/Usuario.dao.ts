import {BaseRepository} from './BaseRepositoty';
import {Usuario} from "../models/Usuario";
import {Rol} from "../models/Rol";
import {Domicilio} from "../models/Domicilio";


export class UsuarioDao implements BaseRepository<number, Usuario>{
    async getAll(): Promise<Usuario[]> {
        return await Usuario.findAll({include: [ { model:Rol }, { model:Domicilio} ]})
    }

    async getById(id: number): Promise<Usuario> {
        return (await Usuario.findByPk(id, {include:[{ model:Rol }, { model:Domicilio}]}))!
    }

    async removeOne(id: number): Promise<void> {
        await Usuario.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: any): Promise<Usuario> {
        await Usuario.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }

    async create(obj: any): Promise<Usuario> {
        return await Usuario.create(obj)
    }

}