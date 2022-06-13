import { Router } from "express";
import { ArticuloListados } from '../controllers/ArticuloListados.controller';
import {RouterInitializer} from "./RouterInitializer";
import RubroGeneralController from "../controllers/RubroGeneral.controller";
import CategoriaController from "../controllers/Categoria.controller";
import DetalleArticuloController from "../controllers/DetalleArticulo.controller";

const express = require('express');
const router:Router = express.Router();
const articuloListadosController = new ArticuloListados();
const rubroGeneralController = new RubroGeneralController();
const categoriaController = new CategoriaController();
const detalleArticuloController = new DetalleArticuloController();


new RouterInitializer(detalleArticuloController,router).init("/articulos/detalles")
new RouterInitializer(categoriaController,router).init("/articulos/categorias")
new RouterInitializer(rubroGeneralController,router).init("/articulos/rubros")
new RouterInitializer(articuloListadosController,router).init("/articulos")

export default router;