import { ImagenController } from './../controllers/ImagenController';
import { Router } from "express";
import multer, { FileFilterCallback } from 'multer'
import express from 'express';
import path from "path";
import { ImageGateway } from '../aws/ImageGateway';
import { ImageService } from '../services/ImageService';
const router:Router = express.Router();
const controller = new ImagenController(new ImageService(new ImageGateway()))

const upload = multer({
    storage:multer.memoryStorage(),
    dest:path.join(__dirname, '/../uploads'),
    limits: {fileSize: 100000000, files:1}
}).single('image')

router.post('/imagen', upload, controller.create )

export default router;