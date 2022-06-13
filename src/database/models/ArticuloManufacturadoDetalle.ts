import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ArticuloManufacturado} from "./ArticuloManufacturado";
import {Insumo} from "./Insumo";


@Table
export class ArticuloManufacturadoDetalle extends Model {
    @Column({type:DataType.NUMBER})
    cantidad!:number

    @Column({type:DataType.STRING})
    unidadDeMedida!:string

    @ForeignKey(()=>ArticuloManufacturado)
    articuloManufacturadoId!: number;

    @BelongsTo(()=>ArticuloManufacturado)
    articulo!:ArticuloManufacturado

    @ForeignKey(()=>Insumo)
    insumoId!: number;

    @BelongsTo(()=>Insumo)
    insumo!: Insumo
}