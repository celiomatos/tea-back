import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { Pagination } from "src/model/pagination";
import { User } from "src/model/user";
import { UserService } from "src/service/user.service";

@Controller('/user')
export class UserController {

    constructor(private readonly service: UserService) { }

    @Get()
    findAll(@Req() req: Request): User[] | Pagination<User> {
        return this.service.findAll(req.query);
    }

    @Get(':/id')
    findById(@Param() id: number): User {
        return null;
    }

    @Post()
    save(@Body() body: User): User {
        return null;
    }

    @Put('/:id')
    update(@Param() id: number, @Body() body: User) {
        return null;
    }

    @Delete('/:id')
    delete(@Param() id: number): boolean {
        return true;
    }
}