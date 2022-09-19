import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Insumo} from "./Insumo";


@Table
export class PrecioInsumo extends Model {
    @Column({type:DataType.INTEGER})
    precioVenta!: number

    @Column({type:DataType.INTEGER})
    precioCompra!: number

    @Column({type:DataType.DATE})
    fecha!: Date

    @ForeignKey(()=>Insumo)
    insumoId!:number

    @BelongsTo(()=>Insumo)
    insumo!: Insumo
}