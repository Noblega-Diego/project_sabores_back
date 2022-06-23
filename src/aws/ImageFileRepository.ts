import AWS from 'aws-sdk'


export class ImageFileRepository {

    private s3: AWS.S3
    private BUCKET_NAME: string
    constructor(){
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        })
        this.BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME!
    }

    public async saveImage(name: string, data: Blob|Buffer) {
        return (await this.uploadImage(name, data)).Location
    }

    public async deleteImage(key: string) {
        await this.s3.deleteObject({Bucket:this.BUCKET_NAME, Key:key})
    }

    private async uploadImage(name: string, data: Blob|Buffer){
        return await this.s3.upload({
            Bucket: this.BUCKET_NAME,
            Key: name,
            Body: data,
        }).promise()
    }
}