import { Imagen, IRepositoryImage, Url } from "../services/IRepositoryImage";
import { ImageFileRepository } from "./ImageFileRepository";

export class ImageGateway implements IRepositoryImage{

    private imageRepository:ImageFileRepository;
    
    constructor(){
        this.imageRepository = new ImageFileRepository()
    }

    async saveImage(imagen: Imagen): Promise<Url> {
        return {
            url: await this.imageRepository.saveImage(imagen.fullName, imagen.data)
        }
    }

    async removeImage(url: string): Promise<void> {
        
    }
    async update(url: string, imagen: Imagen): Promise<Url> {
        throw new Error("Method not implemented.");
    }
    
}