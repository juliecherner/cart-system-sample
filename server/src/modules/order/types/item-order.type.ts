import { Types } from 'mongoose';
import { SubcriptionOptions } from '../../items/item-subscription.type';

export interface OrderItem extends SubcriptionOptions {
  _id: Types.ObjectId;
}
