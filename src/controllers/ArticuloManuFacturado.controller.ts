import { Request, Response } from "express";

const ModelArticuloManufacturado = require('./../database/models').ArticuloManufacturado
const ModelRubroGeneral = require('./../database/models').RubroGeneral
const ModelPrecioArticulo = require('./../database/models').PrecioArticuloManufacturado

interface Articulo{
    nombre:string,
    precio:number
}
export const getAll = async (req:Request, res:Response) => {
    let articulos = await ModelArticuloManufacturado.findAll({include: [ { model:ModelRubroGeneral }, { model:ModelPrecioArticulo} ]})
    res.send(articulos.map((art:any)=>{let a:Articulo = {
        nombre:art.denominacion,
        precio:art.PrecioArticuloManufacturados[0].precioVenta
    }; return a}));
    
}