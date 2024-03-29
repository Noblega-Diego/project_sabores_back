import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {RubroInsumo} from "./RubroInsumo";
import {ArticuloManufacturadoDetalle} from "./ArticuloManufacturadoDetalle";
import {PrecioInsumo} from "./PrecioInsumo";
import { UnidadDeMedida } from "./UnidadDeMedida";


@Table
export class Insumo extends Model {
    @Column({type:DataType.STRING})
    denominacion!: string
    @Column({type:DataType.STRING})
    imagen!: string
    
    @Column({type:DataType.INTEGER})
    stockMinimo!: number
    @Column({type:DataType.INTEGER})
    stock!: number

    @ForeignKey(()=>RubroInsumo)
    rubroInsumoId!:number

    @BelongsTo(()=>RubroInsumo)
    rubroInsumo!:RubroInsumo

    @HasMany(()=>ArticuloManufacturadoDetalle)
    articuloManufacturadoDetalles!:ArticuloManufacturadoDetalle[]

    @HasMany(()=>PrecioInsumo)
    precio!:PrecioInsumo[]

    @ForeignKey(()=>UnidadDeMedida)
    unidadDeMedidaId!: number

    @BelongsTo(()=>UnidadDeMedida)
    unidadDeMedida!: UnidadDeMedida
}