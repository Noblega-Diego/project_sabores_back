import {BasicController} from "./BasicController";
import {RubroInsumoDao} from "../database/repository/RubroInsumo.dao";

export default class RubroInsumoController extends BasicController<RubroInsumoDao>{


    constructor(){
        super()
        this.repository = new RubroInsumoDao();
    }

}