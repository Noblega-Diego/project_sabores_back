import {Request, Response} from "express";

import { ImageService } from '../services/ImageService';
export class ImagenController {
    constructor(private imageService: ImageService) {
        
    }

    public create = async (req:Request<any>, res:Response) =>{
        let imageUrl = await this.imageService.save({
            data:req.file?.buffer!,
            fullName: req.file?.originalname!
        })
        res.send(imageUrl)
    }
}