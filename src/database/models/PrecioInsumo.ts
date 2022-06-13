import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Insumo} from "./Insumo";


@Table
export class PrecioInsumo extends Model {
    @Column({type:DataType.NUMBER})
    precioVenta!: number

    @Column({type:DataType.NUMBER})
    precioCompra!: number

    @Column({type:DataType.DATE})
    fecha!: Date

    @ForeignKey(()=>Insumo)
    insumoId!:number

    @BelongsTo(()=>Insumo)
    insumo!: Insumo
}