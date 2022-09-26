import express from "express";
require('dotenv').config()
import RouterArticulo from './routers/Articulo.router'
import RouterPedido from './routers/Pedido.router'
import RouterInsumo from './routers/Insumo.router'
import ImagenRouter from './routers/Image.router'
import { sequelize } from "./database/models"
// @ts-ignore
import cors from 'cors';

const app = express();
const config = {
    PORT: process.env.PORT
}
app.use(cors())
app.use(express.json())

app.use(RouterArticulo)
app.use(RouterPedido)
app.use(RouterInsumo)
app.use(ImagenRouter)

app.listen(config.PORT, () => {
    console.log(`Servidor en puerto ${config.PORT}`);
    sequelize.sync({force: false})
})