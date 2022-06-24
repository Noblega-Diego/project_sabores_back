import express from "express";
require('dotenv').config()
import RouterArticulo from './routers/Articulo.router'
import RouterPedido from './routers/Pedido.router'
import RouterInsumo from './routers/Insumo.router'
import ImagenRouter from './routers/Image.router'
import routers from './routers'
// @ts-ignore
import cors from 'cors';

const app = express();
const config = {
    PORT: process.env.PORT
}
app.use(cors())
app.use(express.json())

routers.then((router)=>{
    app.use(router)
    app.listen(config.PORT, () => {
        console.log(`Servidor en puerto ${config.PORT}`);
    })
})
