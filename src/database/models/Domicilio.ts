import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Usuario} from "./Usuario";


@Table
export class Domicilio extends Model {
    @Column({type:DataType.STRING})
    calle!: string
    @Column({type:DataType.NUMBER})
    numero!: number
    @Column({type:DataType.STRING})
    localidad!: string

    @ForeignKey(()=>Usuario)
    usuarioId!: number

    @BelongsTo(()=>Usuario)
    usuario!:Usuario
}