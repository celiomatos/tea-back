import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { Pagination } from "src/model/pagination";
import { Product } from "src/model/product";
import { ProductService } from "src/service/product.service";

@Controller('/product')
export class ProductController {

    constructor(private readonly service: ProductService) { }

    @Get()
    findAll(@Req() req: Request): Product[] | Pagination<Product> {
        return this.service.findAll(req.query);
    }

    @Get(':/id')
    findById(@Param() id: number): Product {
        return null;
    }

    @Post()
    save(@Body() body: Product): Product {
        return null;
    }

    @Put('/:id')
    update(@Param() id: number, @Body() body: Product) {
        return null;
    }

    @Delete('/:id')
    delete(@Param() id: number): boolean {
        return true;
    }

}