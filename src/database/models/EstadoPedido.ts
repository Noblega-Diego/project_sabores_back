import {Column, Model, Table, DataType, ForeignKey, BelongsTo} from "sequelize-typescript";
import { Estado } from "./Estado";
import { Pedido } from "./Pedido";

@Table
export class EstadoPedido extends Model {
    @Column({
        type: DataType.DATE,
    })
    fecha!: Date
    @ForeignKey(()=>Pedido)
    pedidoId!: number

    @BelongsTo(()=>Pedido)
    pedido!: Pedido

    @ForeignKey(()=>Estado)
    estadoId!: number

    @BelongsTo(()=>Estado)
    estado!: Estado
}