import {BaseRepository} from './BaseRepositoty';
import {ArticuloManufacturadoDetalle} from "../models/ArticuloManufacturadoDetalle";
import {Insumo} from "../models/Insumo";
import {sequelize} from "../models";
import {ArticuloManufacturado} from "../models/ArticuloManufacturado";

export class ArticuloManufacturadoDetalleDao implements BaseRepository<number, ArticuloManufacturadoDetalle>{

    async getAll(): Promise<ArticuloManufacturadoDetalle[]> {
        return await ArticuloManufacturadoDetalle.findAll({include: [{model:Insumo}, {model:ArticuloManufacturado}]})
    }

    async getById(id: number): Promise<ArticuloManufacturadoDetalle> {
        return (await ArticuloManufacturadoDetalle.findByPk(id, {include: [{model:Insumo}, {model:ArticuloManufacturado}]}))!
    }

    async removeOne(id: number): Promise<void> {
        await ArticuloManufacturadoDetalle.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: ArticuloManufacturadoDetalle): Promise<ArticuloManufacturadoDetalle> {
        await ArticuloManufacturadoDetalle.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }

    async create(obj: ArticuloManufacturadoDetalle): Promise<ArticuloManufacturadoDetalle> {
        const articleId = await sequelize!.transaction(async (t)=> {
            const article = await ArticuloManufacturadoDetalle.create({...obj});
            return article.id
        })
        return await this.getById(articleId);
    }

}