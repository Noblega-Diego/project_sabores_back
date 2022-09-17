import {Column, Model, Table, DataType, HasMany} from "sequelize-typescript";
import { EstadoPedido } from "./EstadoPedido";

@Table
export class Estado extends Model {
    @Column({
        type: DataType.STRING,
    })
    estado!: string

    @HasMany(()=>EstadoPedido)
    estados!: EstadoPedido[]
}