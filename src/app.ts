import express from "express";
require('dotenv').config()
import RouterArticuloListado from './routers/ArticuloListado.router' 
const app = express();
const config = {
    PORT: process.env.PORT
}

app.use(express.json())

app.use(RouterArticuloListado)

app.listen(config.PORT, () => {
    console.log(`Servidor en puerto ${config.PORT}`);
})