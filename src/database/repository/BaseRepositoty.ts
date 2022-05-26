
export interface BaseRepository<ID,T>{
    getAll(): Promise<T[]>,
    getById(id:ID): Promise<T|undefined>,
    removeOne(id:ID): Promise<void>,
    update(id:ID,obj:T): Promise<T>
}