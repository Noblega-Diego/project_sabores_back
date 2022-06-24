import {Router} from "express";
import {BasicController} from "../controllers/BasicController";

export class RouterInitializer<T extends BasicController<any>>{
    protected controller!: T
    protected router!:Router

    constructor(controller:T, router:Router) {
        this.controller = controller
        this.router = router
    }

    public init(path:string){
        this.router.get(path+'/:id', this.controller.getById)
        this.router.get(path, this.controller.getAll)
        this.router.post(path, this.controller.create)
        this.router.delete(path+'/:id', this.controller.remove)
        this.router.put(path+'/:id', this.controller.update)
    }
}