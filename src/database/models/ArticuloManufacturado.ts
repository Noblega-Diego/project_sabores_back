import {Table, Column, Model, ForeignKey, BelongsTo, HasMany, DataType} from 'sequelize-typescript';
import {ArticuloManufacturadoDetalle} from "./ArticuloManufacturadoDetalle";
import {RubroGeneral} from "./RubroGeneral";
import {Categoria} from "./Categoria";
import {PrecioArticuloManufacturado} from "./PrecioArticuloManufacturado";


@Table
export class ArticuloManufacturado extends Model {
    @Column({type:DataType.STRING})
    denominacion!:string

    @Column({type:DataType.STRING})
    imagen!:string

    @Column({type:DataType.INTEGER})
    tiempoEstimadoCocina!:number

    @HasMany(()=> PrecioArticuloManufacturado)
    precios!: PrecioArticuloManufacturado[]

    @HasMany(()=> ArticuloManufacturadoDetalle)
    detalles!: ArticuloManufacturadoDetalle[]

    @ForeignKey(()=> RubroGeneral)
    rubroGeneralId!:number

    @BelongsTo(()=> RubroGeneral)
    rubro!: RubroGeneral

    @ForeignKey(()=> Categoria)
    categoriaId!:number

    @BelongsTo(()=> Categoria)
    categoria!: Categoria
}