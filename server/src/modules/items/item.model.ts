import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Types } from 'mongoose';
import { BaseModel } from '../base/base.model';
import { SubcriptionOptions } from './item-subscription.type';

export type PostDocument = HydratedDocument<ItemModel>;

@Schema()
export class ItemModel extends BaseModel {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  subscriptions: SubcriptionOptions[];

  @Prop()
  imageURL: string;

  _id: Types.ObjectId;
}

export const ItemSchema = SchemaFactory.createForClass(ItemModel);
