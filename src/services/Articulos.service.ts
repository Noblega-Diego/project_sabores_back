import {ArticuloManufacturadoDao} from "../database/repository/ArticuloManufacturado.dao";
import {ArticuloManufacturado} from "../database/models/ArticuloManufacturado";

export class ArticulosService {

    constructor(protected articuloRespository:ArticuloManufacturadoDao) {
    }

    async getAllByRubroId(id:number): Promise<ArticuloManufacturado[]>{
        return this.articuloRespository.getAllByRubroId(id);
    }

}