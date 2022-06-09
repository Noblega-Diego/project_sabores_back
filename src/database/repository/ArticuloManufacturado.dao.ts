import {BaseRepository} from './BaseRepositoty';
import {ModelStatic} from "sequelize";

const ArticuloManufacturado:ModelStatic<any> = require('./../models').ArticuloManufacturado
const PrecioArticuloManufacturado:ModelStatic<any> = require('./../models').PrecioArticuloManufacturado
const RubroGeneral:ModelStatic<any> = require('./../models').RubroGeneral
const ArticuloManufacturadoDetalle:ModelStatic<any> = require('./../models').ArticuloManufacturadoDetalle
const Categoria:ModelStatic<any> = require('./../models').Categoria
const Insumo:any = require('./../models').Insumo
const {sequelize}:ModelStatic<any> = require('./../models')

export class ArticuloManufacturadoDao implements BaseRepository<number, any>{
    async getAll(): Promise<any> {
        console.log(await ArticuloManufacturado.findAll({include: [ { model:RubroGeneral }, { model:Categoria, as:'Categoria'}, { model:PrecioArticuloManufacturado, order: [['fecha', 'DESC']], limit:1} ]}))
        return []
    }

    async getById(id: number): Promise<any> {
        return await ArticuloManufacturado.findByPk(id, {include:[{ model:RubroGeneral }, { model:Categoria, as:'Categoria' }, { model:PrecioArticuloManufacturado, order: [['fecha', 'DESC']], limit:10 },
                {model:ArticuloManufacturadoDetalle, include:[{model:Insumo}]}]})
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

    async create(obj: any): Promise<any> {
        const articleId = await sequelize!.transaction(async (t)=> {
            const article = await ArticuloManufacturado.create({
                denominacion: obj.denominacion,
                imagen: obj.imagen,
                tiempoEstimadoCocina: obj.tiempoEstimadoCocina,
                RubroGeneralId: obj.RubroGeneralId,
                CategoriaId: obj.CategoriaId
            });
            await PrecioArticuloManufacturado.create({
                ArticuloManufacturadoId: article.id,
                precioVenta: obj.precio.precioVenta,
                precioCompra: obj.precio.precioCompra,
                fecha: new Date()
            });

            for (const detalle of obj.detalles) {
                await ArticuloManufacturadoDetalle.create({
                    InsumoId: detalle.InsumoId,
                    ArticuloManufacturadoId: article.id,
                    cantidad: detalle.cantidad,
                    unidadDeMedida: detalle.unidadDeMedida
                });
            }
            return article.id
        })
        return await this.getById(articleId);
    }

}