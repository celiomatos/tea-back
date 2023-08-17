import { Injectable } from "@nestjs/common";
import { Product } from "src/model/product";
import { GenericService } from "./generic-service";

@Injectable()
export class ProductService extends GenericService<Product> {

    mountQuery(query: any) {
        throw new Error("Method not implemented.");
    }
}