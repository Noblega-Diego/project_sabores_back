import {Column, Model, Table, DataType, HasMany, BelongsTo, HasOne} from "sequelize-typescript";
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

    @BelongsTo(()=>UnidadDeMedida)
    unidadDeMedidaId!: number

    @BelongsTo(()=>Insumo)
    insumoId!: number

    @HasOne(()=>Insumo)
    insumo!:Insumo
    
    @BelongsTo(()=>Receta)
    recetaId!: number

    @HasMany(()=>RecetaDetalle)
    detalles!: RecetaDetalle[]

}