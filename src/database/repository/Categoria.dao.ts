import {BaseRepository} from './BaseRepositoty';
import {Categoria} from "../models/Categoria";



export class CategoriaDao implements BaseRepository<number, Categoria>{
    async getAll(): Promise<Categoria[]> {
        return await Categoria.findAll()
    }

    async getById(id: number): Promise<Categoria> {
        return (await Categoria.findByPk(id))!
    }

    async removeOne(id: number): Promise<void> {
        await Categoria.destroy({
            where:{ id:id }
        })
    }

    async update(id: number, obj: any): Promise<Categoria> {
        await Categoria.update(obj,{
            where:{ id:id }
        })
        return await this.getById(id);
    }

    async create(obj: any): Promise<Categoria> {
        return await Categoria.create(obj)
    }

}