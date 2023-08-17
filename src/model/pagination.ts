import { GenericModel } from "./generic-model";

export class Pagination<M extends GenericModel> {
    model: M[];
    size: number;
    page: number;
    count: number;
}