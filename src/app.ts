import express from "express";
require('dotenv').config()
import RouterArticuloListado from './routers/ArticuloListado.router'
import RouterPedido from './routers/Pedido.router'
// @ts-ignore
import cors from 'cors';

const app = express();
const config = {
    PORT: process.env.PORT
}
app.use(cors())
app.use(express.json())

app.use(RouterArticuloListado)
app.use(RouterPedido)

app.listen(config.PORT, () => {
    console.log(`Servidor en puerto ${config.PORT}`);
})