import {Request, Response} from "express";
import {BasicController} from "./BasicController";
import {InsumoDao} from "../database/repository/Insumo.dao";

export default class InsumoController extends BasicController<InsumoDao>{


    constructor(){
        super()
        this.repository = new InsumoDao();
    }

}