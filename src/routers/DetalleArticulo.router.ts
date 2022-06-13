import { Router } from "express";
import {RouterInitializer} from "./RouterInitializer";
import DetalleArticuloController from "../controllers/DetalleArticulo.controller";

const express = require('express');
const router:Router = express.Router();
const detalleArticuloController = new DetalleArticuloController();


new RouterInitializer(detalleArticuloController,router).init("/articulos/detalles")

export default router;