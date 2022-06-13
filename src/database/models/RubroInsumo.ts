import {BelongsTo, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Insumo} from "./Insumo";


@Table
export class RubroInsumo extends Model {
    @Column({type:DataType.STRING})
    denominacion!:string

    @HasMany(()=>Insumo)
    insumos!:Insumo[]
}