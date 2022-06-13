import {Request, Response} from "express";
import {BasicController} from "./BasicController";
import {CategoriaDao} from "../database/repository/Categoria.dao";

export default class CategoriaController extends BasicController<CategoriaDao>{

    constructor(){
        super()
        this.repository = new CategoriaDao();
    }

}