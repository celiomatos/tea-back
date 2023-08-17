import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/teadb'),
    UserModule],
  controllers: [
    AppController,
    ProductController,
    CustomerController
  ],
  providers: [
    AppService,
    ProductService,
    CustomerService
  ],
})
export class AppModule { }
