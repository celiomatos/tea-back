import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pagination } from "src/model/pagination";
import { User } from "src/user/user.schema";

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly model: Model<User>) { }

    async findAll(query: any): Promise<User[] | Pagination<User>> {
        return await this.model.find().exec();
    }

    async save(user: User): Promise<User> {
        return new this.model(user).save();
    }

}