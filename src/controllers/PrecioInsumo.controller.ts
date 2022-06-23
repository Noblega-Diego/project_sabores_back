import {BasicController} from "./BasicController";
import {PrecioInsumoDao} from "../database/repository/PrecioInsumo.dao";

export default class PrecioInsumoController extends BasicController<PrecioInsumoDao>{


    constructor(){
        super()
        this.repository = new PrecioInsumoDao();
    }

}