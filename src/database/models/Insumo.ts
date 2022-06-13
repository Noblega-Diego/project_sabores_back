import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {RubroInsumo} from "./RubroInsumo";
import {ArticuloManufacturadoDetalle} from "./ArticuloManufacturadoDetalle";
import {PrecioInsumo} from "./PrecioInsumo";


@Table
export class Insumo extends Model {
    @Column({type:DataType.STRING})
    denominacion!: string
    @Column({type:DataType.STRING})
    imagen!: string
    @Column({type:DataType.STRING})
    unidadDeMedida!: string
    @Column({type:DataType.NUMBER})
    stockMinimo!: number
    @Column({type:DataType.NUMBER})
    stock!: number

    @ForeignKey(()=>RubroInsumo)
    rubroInsumoId!:number

    @BelongsTo(()=>RubroInsumo)
    rubroInsumo!:RubroInsumo

    @HasMany(()=>ArticuloManufacturadoDetalle)
    articuloManufacturadoDetalles!:ArticuloManufacturadoDetalle[]

    @HasMany(()=>PrecioInsumo)
    precio!:PrecioInsumo[]

}