
export interface BaseRepository<ID,T>{
    getAll(): Promise<T[]>,
    getById(id:ID): Promise<T>,
    removeOne(id:ID): Promise<void>,
    update(id:ID,model:T): Promise<T>
    create(model:T): Promise<T>
}