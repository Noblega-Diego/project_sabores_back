import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ArticuloManufacturado} from "./ArticuloManufacturado";
import {Insumo} from "./Insumo";
import { UnidadDeMedida } from "./UnidadDeMedida";


@Table
export class ArticuloManufacturadoDetalle extends Model {
    @Column({type:DataType.INTEGER})
    cantidad!:number

    @BelongsTo(()=>UnidadDeMedida)
    unidadDeMedidaId!: number;

    @ForeignKey(()=>ArticuloManufacturado)
    articuloManufacturadoId!: number;

    @BelongsTo(()=>ArticuloManufacturado)
    articulo!:ArticuloManufacturado

    @ForeignKey(()=>Insumo)
    insumoId!: number;

    @BelongsTo(()=>Insumo)
    insumo!: Insumo
}