import {Model} from "sequelize-typescript";
import {BaseRepository} from "./BaseRepositoty";

export class ImplementBaseRepository <T extends Model> implements BaseRepository<number, T>{

    private model:any;

    // @ts-ignore
    get modelDao(): typeof T{
        return (this.model)!;
    }

    // @ts-ignore
    set modelDao(typeModel: typeof T){
        this.model = typeModel;
    }

    async create(model: any): Promise<T> {
        return await this.modelDao.create(model)
    }

    async getAll(): Promise<T[]> {
        return await this.modelDao.findAll();
    }

    async getById(id: number): Promise<T> {
        return (await this.modelDao.findByPk(id))!
    }

    async removeOne(id: number): Promise<void> {
        await this.modelDao.destroy({where:{id}})
    }

    async update(id: number, model: T): Promise<T> {
        await this.modelDao.update(model,{ where:{id}})
        return await this.getById(id);
    }
}