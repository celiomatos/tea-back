import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { Customer } from "src/model/customer";
import { Pagination } from "src/model/pagination";
import { CustomerService } from "src/service/customer.service";

@Controller('/customer')
export class CustomerController {

    constructor(private readonly service: CustomerService) { }

    @Get()
    findAll(@Req() req: Request): Customer[] | Pagination<Customer> {
        return this.service.findAll(req.query);
    }

    @Get(':/id')
    findById(@Param() id: number): Customer {
        return null;
    }

    @Post()
    save(@Body() body: Customer): Customer {
        return null;
    }

    @Put('/:id')
    update(@Param() id: number, @Body() body: Customer) {
        return null;
    }

    @Delete('/:id')
    delete(@Param() id: number): boolean {
        return true;
    }
}