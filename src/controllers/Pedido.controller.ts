import {PedidoRepository} from "../database/repository/PedidoRepository";
import {Request, Response} from "express";

export default class PedidoController{

    private daoPedido!: PedidoRepository;

    constructor(){
        this.daoPedido = new PedidoRepository();
    }

    public getAll = async (req:Request, res:Response) => {
        res.send(await this.daoPedido.getAll());
    }

    public getById = async (req:Request, res:Response) =>{
        const id:string = req.params.id;
        res.send(await this.daoPedido.getById(Number.parseInt(id)));
    }

    public generarPedido = async (req:Request, res:Response) =>{
        const peticionPedido:PeticionPedidioDto = req.body!;
        if(!(peticionPedido.tipoEntrega === 'envio' || peticionPedido.tipoEntrega === 'local')){
            res.status(400).send({res:"tipo entrega no es correcto"}); return;
        }
        let pedido = await this.daoPedido.create({
            fecha: new Date(),
            tipoEntrega: peticionPedido.tipoEntrega,
            estado: peticionPedido.estado,
            detallePedidos: peticionPedido.detalles
        })
        res.send(pedido)
    }
}
interface DetallePeticionPedidoDto {
    ArticuloManufacturadoId:number,
    cantidad:number
}
interface PeticionPedidioDto {
    detalles:Array<DetallePeticionPedidoDto>,
    tipoEntrega:string,
    estado:string
}