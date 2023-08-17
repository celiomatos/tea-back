import { Injectable } from "@nestjs/common";
import { User } from "src/model/user";
import { GenericService } from "./generic-service";

@Injectable()
export class UserService extends GenericService<User>{

    mountQuery(query: any) {
        throw new Error("Method not implemented.");
    }

}