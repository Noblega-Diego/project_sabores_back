
import {ImplementBaseRepository} from "./ImplementBaseRepository";
import {RubroInsumo} from "../models/RubroInsumo";



export class RubroInsumoDao extends ImplementBaseRepository<RubroInsumo>{
    constructor() {
        super();
        this.modelDao = RubroInsumo
    }
}