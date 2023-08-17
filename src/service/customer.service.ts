import { Injectable } from "@nestjs/common";
import { Customer } from "src/model/customer";
import { GenericService } from "./generic-service";

@Injectable()
export class CustomerService extends GenericService<Customer>{

    mountQuery(query: any) {
        throw new Error("Method not implemented.");
    }


}