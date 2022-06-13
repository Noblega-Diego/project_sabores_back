import {PedidoRepository} from "../database/repository/PedidoRepository";
import {Request, Response} from "express";
import {BasicController} from "./BasicController";

export default class PedidoController extends BasicController<PedidoRepository>{


    constructor(){
        super()
        this.repository = new PedidoRepository();
    }


    public create = async (req:Request, res:Response) =>{
        const peticionPedido:PeticionPedidoDto = req.body!;
        if(!(peticionPedido.tipoEntrega === 'envio' || peticionPedido.tipoEntrega === 'local')){
            res.status(400).send({res:"tipo entrega no es correcto"}); return;
        }
        let pedido = await this.repository.create({...{
            fecha: new Date(),
            tipoEntrega: peticionPedido.tipoEntrega,
            estado: peticionPedido.estado
        }})
        res.send(pedido)
    }

    public generarPedido = async (req:Request, res:Response) =>{
        const peticionPedido:PeticionPedidoDto = req.body!;
        if(!(peticionPedido.tipoEntrega === 'envio' || peticionPedido.tipoEntrega === 'local')){
            res.status(400).send({res:"tipo entrega no es correcto"}); return;
        }
        let pedido = await this.repository.create({
            fecha: new Date(),
            tipoEntrega: peticionPedido.tipoEntrega,
            estado: peticionPedido.estado,
            detalle: peticionPedido.detalles
        })
        res.send(pedido)
    }
}
interface DetallePeticionPedidoDto {
    ArticuloManufacturadoId:number,
    cantidad:number
}
interface PeticionPedidoDto {
    detalles:Array<DetallePeticionPedidoDto>,
    tipoEntrega:string,
    estado:string
}