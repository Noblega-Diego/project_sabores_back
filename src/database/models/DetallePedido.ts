import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ArticuloManufacturado} from "./ArticuloManufacturado";
import {Pedido} from "./Pedido";


@Table
export class DetallePedido extends Model {
    @Column({type:DataType.NUMBER})
    cantidad!:number

    @ForeignKey(()=>ArticuloManufacturado)
    articuloManufacturadoId!: number

    @BelongsTo(()=>ArticuloManufacturado)
    articulo!: ArticuloManufacturado

    @ForeignKey(()=>Pedido)
    pedidoId!: number

    @BelongsTo(()=>Pedido)
    pedido!: Pedido
}