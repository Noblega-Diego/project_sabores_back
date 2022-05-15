import { Router } from "express";
import { getAll } from '../controllers/ArticuloManuFacturado.controller';

const express = require('express');
const router:Router = express.Router();

router.get('/articulo/', getAll)

export default router;