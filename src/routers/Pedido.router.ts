import { Router } from "express";
import PedidoController from "../controllers/Pedido.controller";
import {RouterInitializer} from "../utils/RouterInitializer";

const express = require('express');
const router:Router = express.Router();
const pedidoController = new PedidoController();


router.post('/generarPedido', pedidoController.generarPedido)
new RouterInitializer(pedidoController,router).init("/pedidos")

export default router;