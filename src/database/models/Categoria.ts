import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ArticuloManufacturado} from "./ArticuloManufacturado";


@Table({tableName:'categorias'})
export class Categoria extends Model {
    @Column({type:DataType.STRING})
    denominacion!:string

    @HasMany(()=>ArticuloManufacturado)
    articulos!:ArticuloManufacturado[]
}