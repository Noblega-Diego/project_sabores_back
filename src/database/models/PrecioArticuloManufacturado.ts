import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ArticuloManufacturado} from "./ArticuloManufacturado";


@Table
export class PrecioArticuloManufacturado extends Model {
    @Column({type:DataType.NUMBER})
    precioVenta!: number

    @Column({type:DataType.NUMBER})
    precioCompra!: number

    @Column({type:DataType.DATE})
    fecha!: Date

    @ForeignKey(()=>ArticuloManufacturado)
    articuloManufacturadoId!:number

    @BelongsTo(()=>ArticuloManufacturado)
    articulo!: ArticuloManufacturado
}