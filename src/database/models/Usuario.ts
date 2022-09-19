import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Rol} from "./Rol";

@Table
export class Usuario extends Model {
    @Column({type:DataType.STRING})
    nombre!: string
    @Column({type:DataType.STRING})
    apellido!: string
    @Column({type:DataType.STRING})
    usuario!: string
    @Column({type:DataType.STRING})
    clave!: string
    @Column({type:DataType.STRING})
    email!: string
    @Column({type:DataType.INTEGER})
    telefono!: number

    @ForeignKey(()=>Rol)
    rolId!: number

    @BelongsTo(()=>Rol)
    rol!: Rol
}