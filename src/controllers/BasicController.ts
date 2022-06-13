import {BaseRepository} from "../database/repository/BaseRepositoty";
import {Request, Response} from "express";
import {Model} from "sequelize-typescript";


export class BasicController<T extends BaseRepository<number, Model>>{
    protected repository!: T

    public getAll = async (req:Request, res:Response) => {
        res.send(await this.repository.getAll());
    }

    public getById = async (req:Request, res:Response) =>{
        const id:string = req.params.id;
        res.send(await this.repository.getById(Number.parseInt(id)));
    }

    public remove = async (req:Request, res:Response) =>{
        const id:number = Number.parseInt(req.params.id);
        res.send(await this.repository.removeOne(id));
    }

    public create = async (req:Request, res:Response) =>{
        res.send(await this.repository.create(req.body))
    }

    public update = async (req:Request, res:Response) =>{
        const id:number = Number.parseInt(req.params.id);
        res.send(await this.repository.update(id,req.body))
    }
}