import { Router } from "express";
import { ArticuloListados } from '../controllers/ArticuloListados.controller';
import {RouterInitializer} from "./RouterInitializer";

const express = require('express');
const router:Router = express.Router();
const articuloListadosController = new ArticuloListados();

new RouterInitializer(articuloListadosController,router).init("/articulos")
export default router;