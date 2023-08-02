import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseModel } from '../base/base.model';
import { Types } from 'mongoose';


export type UserDocument = HydratedDocument<UserModel>;

@Schema()
export class UserModel extends BaseModel {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  _id: Types.ObjectId
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
