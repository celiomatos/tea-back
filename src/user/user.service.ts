import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pagination } from "src/model/pagination";
import { User } from "src/user/user.schema";

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly model: Model<User>) { }

    /**
     * 
     * @param query 
     * @returns 
     */
    async findAll(query: any): Promise<User[] | Pagination<User>> {

        const search = this.mountQuery(query);
        const projection = this.mountProjection(query);

        return await this.model.find(search, projection).exec();
    }

    /**
     * 
     * @param user 
     * @returns 
     */
    async save(user: User): Promise<User> {
        return new this.model(user).save();
    }

    /**
     * 
     * @param _id 
     * @returns 
     */
    async delete(_id: string): Promise<User> {
        return this.model.findByIdAndDelete(new Object(_id));
    }

    /**
     * 
     * @param query 
     * @returns 
     */
    mountQuery(query: any): any {
        const search = {}
        search["company._id"] = "64de77dcc405801c825cd199";

        if (query['name']) search['name'] = new RegExp(query['name'], 'i');

        return search;
    }

    /**
     * 
     * @param query 
     * @returns 
     */
    mountProjection(query: any): string {
        return query['projection'] ? query['projection'] : '-company';
    }

}