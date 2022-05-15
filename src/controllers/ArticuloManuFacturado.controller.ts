import { Request, Response } from "express";

const ModelArticuloManufacturado = require('./../database/models').ArticuloManufacturado
const ModelRubroGeneral = require('./../database/models').RubroGeneral
const ModelPrecioArticulo = require('./../database/models').PrecioArticuloManufacturado


export const getAll = async (req:Request, res:Response) => {
    let articulos = await ModelArticuloManufacturado.findAll({include: [ { model:ModelRubroGeneral }, { model:ModelPrecioArticulo} ]})
    res.send(articulos);
}