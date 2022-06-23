
export interface IRepositoryImage {
    saveImage(imagen: Imagen): Promise<Url>

    removeImage(url: string): Promise<void>

    update(url: string, imagen:Imagen): Promise<Url>
}

export interface Imagen{
    data: Blob | Buffer,
    fullName: string
}

export interface Url{
    url: string
}