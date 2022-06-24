import express from "express";
const router = express.Router()
import fs, { read } from  "fs"
//const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName:string):string =>  {
    let arr = fileName.split('.');
    arr.pop()
    if(arr.length == 2)
    return arr.shift()+"."+arr.shift()
    else
    return arr.shift()!
}

let paths = fs.readdirSync(pathRouter)
const readRouters = async (files: string[])=>{
    for (const file of files) {
        const fileWithOutExt = removeExtension(file)
        const skip = ['index'].includes(fileWithOutExt)
        const isRouter = fileWithOutExt.includes('.router')
        if (!skip && isRouter) { 
            console.log('CARGAR RUTA ---->', fileWithOutExt)
            const i = await import(`./${fileWithOutExt}.js`);
            router.use(i.default) 
        }
    }
    router.get('*', (req, res) => {
        res.status(404)
        res.send({ error: 'Not found' })
    })
    return router
}


export default readRouters(paths)