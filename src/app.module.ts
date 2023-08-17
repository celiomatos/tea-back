import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './controller/customer.controller';
import { ProductController } from './controller/product.controller';
import { UserController } from './controller/user.controller';
import { CustomerService } from './service/customer.service';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    ProductController,
    CustomerController
  ],
  providers: [
    AppService,
    UserService,
    ProductService,
    CustomerService
  ],
})
export class AppModule { }
