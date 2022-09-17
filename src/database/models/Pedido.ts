import {Column, HasMany, Model, Table, DataType} from "sequelize-typescript";
import {DetallePedido} from "./DetallePedido";
import { EstadoPedido } from "./EstadoPedido";

@Table
export class Pedido extends Model {
    @Column({type:DataType.NUMBER})
    numero!: number

    @Column({
        type: DataType.ENUM('local', 'envio'),
    })
    tipoEntrega!: string

    @Column({type:DataType.DATE})
    horaEstimadaFin!: Date

    @Column({type:DataType.DATE})
    fecha!: Date

    @HasMany(()=>EstadoPedido)
    estados!: EstadoPedido[]

    @HasMany(()=>DetallePedido)
    detalle!: DetallePedido[]
}