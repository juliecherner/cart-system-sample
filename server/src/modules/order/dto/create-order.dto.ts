import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { OrderItem } from '../types/item-order.type';

export class CreateOrderDto {
  @ApiProperty({ example: '507f1f77bcf86cd799439011' })
  userId: Types.ObjectId;

  @ApiProperty({ example: "[{_id: '507f1f77bcf86cd799439091', option:base, price:10}}]"})
  order: OrderItem[];

  @ApiProperty({example: 10})
  totalCost: number;

  @ApiProperty(({ example: '407f1f87bcf86cd799439011' }))
  paymentId: Types.ObjectId | null;
}
