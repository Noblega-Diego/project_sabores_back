import {Column, Model, Table, DataType, HasMany, BelongsTo, HasOne, ForeignKey} from "sequelize-typescript";
import { EstadoPedido } from "./EstadoPedido";
import { Insumo } from "./Insumo";
import { Receta } from "./Receta";
import { UnidadDeMedida } from "./UnidadDeMedida";

@Table
export class RecetaDetalle extends Model {
    @Column({
        type: DataType.NUMBER,
    })
    cantidad!: number

    @ForeignKey(()=>UnidadDeMedida)
    unidadDeMedidaId!: number

    @BelongsTo(()=>UnidadDeMedida)
    unidadDeMedida!: UnidadDeMedida

    @ForeignKey(()=>Insumo)
    insumoId!: number

    @BelongsTo(()=>Insumo)
    insumo!:Insumo
    
    @ForeignKey(()=>Receta)
    recetaId!: number

    @BelongsTo(()=>Receta)
    receta!: Receta

}