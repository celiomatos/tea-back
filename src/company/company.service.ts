import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Company } from "./company.schema";

@Injectable()
export class CompanyService {

    constructor(@InjectModel('Company') private readonly model: Model<Company>) { }

    async findOne(): Promise<Company> {

        return await this.model.findById({}).exec();
    }

    async upate(company: Company): Promise<Company> {
        return new this.model(company).save();
    }
}