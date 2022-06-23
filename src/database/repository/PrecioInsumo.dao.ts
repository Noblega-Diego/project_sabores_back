import {PrecioInsumo} from "../models/PrecioInsumo";
import {ImplementBaseRepository} from "./ImplementBaseRepository";



export class PrecioInsumoDao extends ImplementBaseRepository<PrecioInsumo>{
    constructor() {
        super();
        this.modelDao = PrecioInsumo
    }
}