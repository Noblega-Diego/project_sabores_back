import { Request, Response } from "express";
import { ArticuloManufacturadoDao } from "../database/repository/ArticuloManufacturado.dao";


export class ArticuloListados{

    private daoArticuloManufacturado!: ArticuloManufacturadoDao;
    
    constructor(){
        this.daoArticuloManufacturado = new ArticuloManufacturadoDao();
    }

    public getAll = async (req:Request, res:Response) =>{
        try {
            let articulos = [...(await this.daoArticuloManufacturado.getAll())].map(ArticuloListados.parseToArticleDto)
            res.send(articulos);
        }catch (e) {
            res.send({err:e})
        }
    }

    public getById = async (req:Request, res:Response) =>{
        try {
            res.send(ArticuloListados.parseToArticleDto(await this.daoArticuloManufacturado.getById(Number(req.params.id))))
        }catch (e) {
            res.send({err:e})
        }

    }

    public remove = async (req:Request, res:Response) =>{
        try {
        await this.daoArticuloManufacturado.removeOne(Number(req.params.id))
            res.status(201).send();
        }catch (e) {
            res.send({err:e})
        }
    }

    public create = async (req:Request, res:Response) =>{
        try {
            const p = await this.daoArticuloManufacturado.create(req.body);
            res.send(p);
        }catch (e) {
            res.send({err:e})
        }

    }

    public update = async (req:Request, res:Response) =>{
        try {
            const p = await this.daoArticuloManufacturado.update(Number(req.params.id),req.body);
            res.send(p);
        }catch (e) {
            res.send({err:e})
        }

    }


    private static parseToArticleDto(a:any):ArticuloDto{
        return {
            id: a.id,
            denominacion: a.denominacion,
            imagen: a.imagen,
            tiempoEstimado: a.tiempoEstimadoCocina,
            rubroGeneral: {
                denominacion: a.RubroGeneral.denominacion,
                id: a.RubroGeneral.id
            },
            categoria: {
                denominacion: a.Categoria.denominacion,
                id: a.Categoria.id
            },
            precio:Number([...(a.PrecioArticuloManufacturados)].shift().precioVenta)
        }
    }
}

interface ArticuloDto{
    id:number
    denominacion:string,
    imagen:string,
    tiempoEstimado:string,
    precio:number,
    rubroGeneral:{
        id:number,
        denominacion:string
    }
    categoria:{
        id:number,
        denominacion:string
    }
}
 