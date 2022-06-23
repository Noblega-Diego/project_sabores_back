import {BaseRepository} from './BaseRepositoty';
import {ModelStatic} from "sequelize";
import {ArticuloManufacturado} from "../models/ArticuloManufacturado";
import {RubroGeneral} from "../models/RubroGeneral";
import {Categoria} from "../models/Categoria";
import {PrecioArticuloManufacturado} from "../models/PrecioArticuloManufacturado";
import {ArticuloManufacturadoDetalle} from "../models/ArticuloManufacturadoDetalle";
import {Insumo} from "../models/Insumo";

const {sequelize}:ModelStatic<any> = require('../models')

export class ArticuloManufacturadoDao implements BaseRepository<number, ArticuloManufacturado>{
    async getAll(): Promise<ArticuloManufacturado[]> {
        return await ArticuloManufacturado.findAll({include: [ { model:RubroGeneral },{ model:Categoria}, { model:PrecioArticuloManufacturado, order: [['fecha', 'DESC']], limit:1} ]})
    }

    async getById(id: number): Promise<ArticuloManufacturado> {
        return (await ArticuloManufacturado.findByPk(id, {include:[{ model:RubroGeneral }, { model:Categoria}, {model: ArticuloManufacturadoDetalle},{ model:PrecioArticuloManufacturado, order: [['fecha', 'DESC']], limit:10 },
                {model:ArticuloManufacturadoDetalle, include:[{model:Insumo}]}]}))!
    }

    async removeOne(id: number): Promise<void> {
        await ArticuloManufacturado.destroy({
            where:{
                id:id
            }
        })
    }

    async update(id: number, obj: ArticuloManufacturado): Promise<ArticuloManufacturado> {
        await ArticuloManufacturado.update(obj,{
            where:{
                id:id
            }
        })
        return await this.getById(id);
    }

    async create(obj: ArticuloManufacturado): Promise<ArticuloManufacturado> {
        const articleId = await sequelize!.transaction(async (t)=> {
            const article = await ArticuloManufacturado.create({
                denominacion: obj.denominacion,
                imagen: obj.imagen,
                tiempoEstimadoCocina: obj.tiempoEstimadoCocina,
                rubroGeneralId: obj.rubroGeneralId,
                categoriaId: obj.categoriaId
            });
            await PrecioArticuloManufacturado.create({
                ArticuloManufacturadoId: article.id,
                precioVenta: obj.precios[0].precioVenta,
                precioCompra: obj.precios[0].precioCompra,
                fecha: new Date()
            });

            for (const detalle of obj.detalles) {
                await ArticuloManufacturadoDetalle.create({
                    insumoId: detalle.insumoId,
                    articuloManufacturadoId: article.id,
                    cantidad: detalle.cantidad,
                    unidadDeMedida: detalle.unidadDeMedida
                });
            }
            return article.id
        })
        return await this.getById(articleId);
    }

    async getAllByRubroId(id: number): Promise<ArticuloManufacturado[]> {
        return await ArticuloManufacturado.findAll({include: [
                { model:RubroGeneral },
                { model:Categoria},
                { model:PrecioArticuloManufacturado, order: [['fecha', 'DESC']], limit:1} ],
                    where: {rubroGeneralId:id}})
    }
}