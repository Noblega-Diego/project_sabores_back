import {Request, Response} from "express";
import {BasicController} from "./BasicController";
import {RubroGeneralDao} from "../database/repository/RubroGeneral.dao";

export default class RubroGeneralController extends BasicController<RubroGeneralDao>{


    constructor(){
        super()
        this.repository = new RubroGeneralDao();
    }

}