import { Router } from "express";
import PedidoController from "../controllers/Pedido.controller";

const express = require('express');
const router:Router = express.Router();
const pedidoController = new PedidoController();

router.post('/generatePedido', pedidoController.generarPedido)
router.get('/pedido/:id', pedidoController.getById)
router.get('/pedidos', pedidoController.getAll)

export default router;