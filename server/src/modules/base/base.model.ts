import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Schema()
export abstract class BaseModel {
  @Prop()
  name: string;

  // @Prop()
  // _id?: Types.ObjectId;
}
