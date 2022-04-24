import express from "express";
const app = express();
const config = {
    PORT: 3000
}

app.use(express.json())



app.listen(config.PORT, () => {
    console.log(`Servidor en puerto ${config.PORT}`, config.PORT);
})