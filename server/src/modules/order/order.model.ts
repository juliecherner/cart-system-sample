import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Types } from 'mongoose';
import { BaseModel } from '../base/base.model';
import { OrderItem } from './types/item-order.type';

export type OrderDocument = HydratedDocument<OrderModel>;

@Schema()
export class OrderModel extends BaseModel {
  @Prop()
  userId: Types.ObjectId;

  @Prop()
  order: OrderItem[];

  @Prop()
  totalCost: number;

  _id: Types.ObjectId;
}

export const OrderSchema = SchemaFactory.createForClass(OrderModel);
