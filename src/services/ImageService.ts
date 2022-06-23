import { Imagen, IRepositoryImage } from "./IRepositoryImage"

export class ImageService {
    constructor(private repositoryImage:IRepositoryImage) {
    }

    async save(imagen:Imagen){
        return this.repositoryImage.saveImage(imagen)
    }

    async update(url:string, imagen:Imagen){
        return this.repositoryImage.update(url,imagen)
    }

    async remove(url:string){
        return this.repositoryImage.removeImage(url)
    }
}