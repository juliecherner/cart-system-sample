import { ApiProperty } from '@nestjs/swagger';
import { SubcriptionOptions } from '../item-subscription.type';

export class CreateItemDto {
  @ApiProperty({ example: 'Enter item name' })
  name: string;

  @ApiProperty({ example: 'Enter item description' })
  description: string;

  @ApiProperty({ example: '[{option:base, price:10}, {option:year, price: 20}}]' })
  subscriptions: SubcriptionOptions[];

  @ApiProperty({ example: 'https://st2.depositphotos.com/4142621/6492/i/450/depositphotos_64926871-stock-photo-clicking-a-subscribe-button.jpg' })
  imageURL: string;
}
