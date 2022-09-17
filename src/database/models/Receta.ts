import {Column, Model, Table, DataType, HasMany, BelongsTo, HasOne} from "sequelize-typescript";
import { RecetaDetalle } from "./RecetaDetalle";

@Table
export class Receta extends Model {
    @Column({
        type: DataType.STRING,
    })
    denominacion!: String

    @Column({
        type: DataType.STRING,
    })
    instruccion!: String

    @HasMany(()=>RecetaDetalle)
    insumo!:RecetaDetalle
}