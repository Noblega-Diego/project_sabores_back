import {RubroGeneral} from "../models/RubroGeneral";
import {sequelize} from "../models";
import {BaseRepository} from "./BaseRepositoty";

export class RubroGeneralDao implements BaseRepository<number, RubroGeneral>{
    async getAll(): Promise<RubroGeneral[]> {
        return await RubroGeneral.findAll();
    }

    async getById(id: number): Promise<RubroGeneral> {
        return (await RubroGeneral.findByPk(id))!
    }

    async removeOne(id: number): Promise<void> {
        await RubroGeneral.destroy({
            where:{ id:id }
        })
    }

    async update(id: number, obj: RubroGeneral): Promise<RubroGeneral> {
        await RubroGeneral.update(obj,{
            where:{ id:id }
        })
        return await this.getById(id);
    }

    async create(obj: any): Promise<RubroGeneral> {
        return (await RubroGeneral.create(obj))!;
    }
}