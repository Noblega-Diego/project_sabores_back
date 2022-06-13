import {Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Usuario} from "./Usuario";

@Table
export class Rol extends Model {


    @Column({type: DataType.STRING})
    denominacion!:string

    @ForeignKey(()=> Usuario)
    usuarioId!:number

    @HasMany(()=>Usuario)
    usuarios!:Usuario[]
}