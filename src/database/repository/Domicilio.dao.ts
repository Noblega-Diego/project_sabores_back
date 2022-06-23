import {ImplementBaseRepository} from "./ImplementBaseRepository";
import {Domicilio} from "../models/Domicilio";



export class DomicilioDao extends ImplementBaseRepository<Domicilio>{
    constructor() {
        super();
        this.modelDao = Domicilio
    }
}