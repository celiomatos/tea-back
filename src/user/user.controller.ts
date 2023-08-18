import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { Pagination } from "src/model/pagination";
import { User } from "src/user/user.schema";
import { UserService } from "src/user/user.service";

@Controller('/user')
export class UserController {

    constructor(private readonly service: UserService) { }

    @Get()
    async findAll(@Req() req: Request): Promise<User[] | Pagination<User>> {
        return await this.service.findAll(req.query);
    }

    @Get(':/id')
    async findById(@Param() id: string): Promise<User> {
        return null;
    }

    @Post()
    async save(@Body() user: User): Promise<User> {
        return this.service.save(user);
    }

    @Put('/:id')
    async update(@Param() id: string, @Body() user: User): Promise<User> {
        return null;
    }

    @Delete('/:id')
    async delete(@Param() id: string): Promise<User> {
        return null;
    }
}