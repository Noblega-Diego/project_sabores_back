import { Router } from "express";
import {RouterInitializer} from "./RouterInitializer";
import PrecioInsumoController from "../controllers/PrecioInsumo.controller";
import InsumoController from "../controllers/Insumo.controller";
import RubroInsumoController from "../controllers/RubroInsumo.controller";

const express = require('express');
const router:Router = express.Router();
const precioInsumoController = new PrecioInsumoController();
const rubroInsumoController = new RubroInsumoController();
const insumoController = new InsumoController();


new RouterInitializer(precioInsumoController,router).init("/insumos/precios")
new RouterInitializer(rubroInsumoController,router).init("/insumos/rubros")
new RouterInitializer(insumoController,router).init("/insumos")

export default router;