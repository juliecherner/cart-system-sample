import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderModel } from './order.model';
import { BaseService } from '../base/base.service';

@Injectable()
export class OrdersService extends BaseService<OrderModel, CreateOrderDto> {
  constructor(
    @InjectModel(OrderModel.name)
    private readonly orderModel: Model<OrderModel>,
  ) {
    super(orderModel);
  }

  async addItem(filter: any, dto: any) {
    return await this.orderModel.findOneAndUpdate(filter, {$push: dto}, {
      returnOriginal: false,
    });
  }

  async deleteItem(id: string) {
    return await this.orderModel.findOneAndUpdate({_id: id}, {$pull: { _id: id}}, {
      returnOriginal: false,
    });
  }

  async deleteWithoutUsersId () {
    await this.orderModel.deleteMany({userId: null})
  }
}
