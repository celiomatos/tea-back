import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { Company } from "./company.schema";
import { CompanyService } from "./company.service";

@Controller('/company')
export class CompanyController {

    constructor(private readonly service: CompanyService) { }

    @Get()
    async findById(@Param() id: string): Promise<Company> {
        return await this.service.findOne();
    }

    @Put()
    async update(@Param() id: string, @Body() company: Company): Promise<Company> {
        return null;
    }
}