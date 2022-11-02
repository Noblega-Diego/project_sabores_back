import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ArticuloManufacturado} from "./ArticuloManufacturado";
import {Insumo} from "./Insumo";
import { UnidadDeMedida } from "./UnidadDeMedida";


@Table
export class ArticuloManufacturadoDetalle extends Model {
    @Column({type:DataType.INTEGER})
    cantidad!:number

    @ForeignKey(()=>UnidadDeMedida)
    unidadDeMedidaId!: number

    @BelongsTo(()=>UnidadDeMedida)
    unidadDeMedida!: UnidadDeMedida

    @ForeignKey(()=>ArticuloManufacturado)
    articuloManufacturadoId!: number;

    @BelongsTo(()=>ArticuloManufacturado)
    articulo!:ArticuloManufacturado

    @ForeignKey(()=>Insumo)
    insumoId!: number;

    @BelongsTo(()=>Insumo)
    insumo!: Insumo
}