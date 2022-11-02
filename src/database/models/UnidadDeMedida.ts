import {Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";

@Table
export class UnidadDeMedida extends Model {

    @Column({type: DataType.STRING})
    denominacion!:string
}