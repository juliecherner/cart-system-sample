import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModel, OrderSchema } from './order.model';
import { BaseService } from '../base/base.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: OrderModel.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [
    {
      provide: BaseService,
      useClass: OrdersService,
    },
  ],
  exports: [OrdersModule]
})
export class OrdersModule { }
