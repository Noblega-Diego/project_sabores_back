import {Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ArticuloManufacturado} from "./ArticuloManufacturado";
import {Usuario} from "./Usuario";

@Table
export class RubroGeneral extends Model {

    @Column({type:DataType.STRING})
    denominacion!:string

    @HasMany(()=>ArticuloManufacturado)
    articulos!:ArticuloManufacturado[]
}