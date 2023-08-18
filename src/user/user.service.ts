import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pagination } from "src/model/pagination";
import { User } from "src/user/user.schema";

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly model: Model<User>) { }

    async findAll(query: any): Promise<User[] | Pagination<User>> {

        const search = this.mountQuery(query);
        console.log(search);
        const projection = this.mountProjection(query);
        console.log(projection);
        return await this.model.find(search, projection).exec();
    }

    async save(user: User): Promise<User> {
        return new this.model(user).save();
    }

    mountQuery(query: any): any {
        console.log(query);

        const search = {}
        search["company._id"] = "64de77dcc405801c825cd199";
        if (query['name']) search['name'] = new RegExp('\\b' + query['name'] + '\\b', 'i');

        return search;
    }

    mountProjection(query: any): string {
        console.log(query['projection']);
        return query['projection'] ? query['projection'] : '-company';
    }

}