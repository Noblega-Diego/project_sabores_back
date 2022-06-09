import { Router } from "express";
import { ArticuloListados } from '../controllers/ArticuloListados.controller';

const express = require('express');
const router:Router = express.Router();
const articuloListadosController = new ArticuloListados();

router.get('/articulos/', articuloListadosController.getAll)
router.get('/articulos/:id', articuloListadosController.getById)
router.delete('/articulos/:id', articuloListadosController.remove)
router.post('/articulos', articuloListadosController.create)
router.put('/articulos/:id', articuloListadosController.update)
export default router;