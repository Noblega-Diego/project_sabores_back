import { Request, Response } from "express";
import { ArticuloManufacturadoDao } from "../database/repository/ArticuloManufacturado.dao";
import {ArticuloManufacturado} from "../database/models/ArticuloManufacturado";
import {BasicController} from "./BasicController";
import {ArticulosService} from "../services/Articulos.service";


export class ArticuloListados extends BasicController<ArticuloManufacturadoDao>{

    private articuloService!: ArticulosService;

    constructor(){
        super()
        this.repository = new ArticuloManufacturadoDao();
        this.articuloService = new ArticulosService(this.repository)
    }

    public getAll = async (req:Request, res:Response) =>{
        try {
            let articulos: any[] = []
            if(req.query.rubroId)
                articulos = await this.articuloService.getAllByRubroId(Number(req.query.rubroId))
            else
                articulos = await this.repository.getAll()
            res.send(articulos);
        }catch (e) {
            res.send({err:e})
        }
    }

    public getById = async (req:Request, res:Response) =>{
        try {
            res.send(this.articuloToArticuloDto(await this.repository.getById(Number(req.params.id))))
        }catch (e) {
            res.send({err:e})
        }

    }

    public remove = async (req:Request, res:Response) =>{
        try {
        await this.repository.removeOne(Number(req.params.id))
            res.status(201).send();
        }catch (e) {
            res.send({err:e})
        }
    }

    public create = async (req:Request, res:Response) =>{
        try {
            const articuloDto =  req.body;
            let articulo = this.articuloDtoToArticulo(articuloDto);
            articulo.precios[0].fecha = new Date()
            const p = await this.repository.create(req.body);
            res.send(p);
        }catch (e) {
            res.send({err:e})
        }

    }

    public update = async (req:Request, res:Response) =>{
        try {
            const articuloDto =  req.body;
            const p = await this.repository.update(
                Number(req.params.id),
                this.articuloDtoToArticulo(articuloDto));
            res.send(p);
        }catch (e) {
            res.send({err:e})
        }

    }


    private articuloToArticuloDto(a:ArticuloManufacturado):ArticuloDto{
        return {
            id: a.id,
            denominacion: a.denominacion,
            imagen: a.imagen,
            tiempoEstimado: a.tiempoEstimadoCocina,
            rubro: {
                denominacion: a.rubro.denominacion,
                id: a.rubro.id
            },
            categoria: {
                denominacion: a.categoria.denominacion,
                id: a.categoria.id
            },
            precio:{
                precioVenta:[...(a.precios)].shift()!.precioVenta
            }
        }
    }


    private articuloDtoToArticulo(a:ArticuloDto):any{
        return {
            id: a.id,
            denominacion: a.denominacion,
            imagen: a.imagen,
            tiempoEstimadoCocina: a.tiempoEstimado,
            rubroCategoriaId: a.rubro.id,
            categoriaId: a.categoria.id,
            precios: [{
                precioVenta: a.precio.precioVenta,
                precioCompra: a.precio.precioCompra,
                fecha: new Date(a.precio.fecha!)
            }]
        }
    }
}

interface ArticuloDto{
    id:number
    denominacion:string,
    imagen:string,
    tiempoEstimado:number,
    precio:{
        id?:number
        precioVenta:number,
        precioCompra?:number,
        fecha?:string,
    }
    rubro:{
        id:number,
        denominacion:string
    }
    categoria:{
        id:number,
        denominacion:string
    }
    detalles?:{
        cantidad:number,
        insumoId:number
    }[]
}
 