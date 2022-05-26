import { Request, Response } from "express";
import { ArticuloManufacturadoDao } from "../database/repository/ArticuloManufacturado.dao";


export class ArticuloListados{

    private daoArticuloManufacturado!: ArticuloManufacturadoDao;
    
    constructor(){
        this.daoArticuloManufacturado = new ArticuloManufacturadoDao();
    }

    async getAll(req:Request, res:Response){
        try {
            let articulos = [...(await this.daoArticuloManufacturado.getAll())].map(this.parseToArticle)
            res.send(articulos);
        }catch (e) {
            res.send({err:e})
        }
    }

    async getById(req:Request, res:Response){
        try {
            res.send(this.parseToArticle(await this.daoArticuloManufacturado.getById(Number(req.params.id))))
        }catch (e) {
            res.send({err:e})
        }
    }

    private parseToArticle(a:any):ArticuloDto{
        return {
            id: a.id,
            denominacion: a.denominacion,
            imagen: a.imagen,
            tiempoEstimado: a.tiempoEstimadoCocina,
            rubroGeneral: {
                denominacion: a.RubroGeneral.denominacion,
                id: a.RubroGeneral.id
            },
            precio:Number(a.PrecioArticuloManufacturados.pop()?.precioVenta)
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
}
 