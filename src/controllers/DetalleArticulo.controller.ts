import {Request, Response} from "express";
import {BasicController} from "./BasicController";
import {ArticuloManufacturadoDetalleDao} from "../database/repository/ArticuloManufacturadoDetalle.dao";

export default class DetalleArticuloController extends BasicController<ArticuloManufacturadoDetalleDao>{


    constructor(){
        super()
        this.repository = new ArticuloManufacturadoDetalleDao();
    }

}