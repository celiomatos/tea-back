import { GenericModel } from "src/model/generic-model";
import { Pagination } from "src/model/pagination";

export abstract class GenericService<M extends GenericModel> {

    findAll(query: any): M[] | Pagination<M> {
        return null;
    }

    abstract mountQuery(query: any): any;
}