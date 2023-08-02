import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BaseModel } from './base.model';

@Injectable()
export abstract class BaseService<TModel, TCreateDto> {
  constructor(
    @InjectModel(BaseModel.name) private readonly baseModel: Model<TModel>,
  ) {}

  async create(createDto: TCreateDto) {
    const createdModel = new this.baseModel(createDto);
    return await createdModel.save();
  }

  async find(filter: any) {
    return await this.baseModel.find(filter);
  }

  async findAll() {
    return await this.baseModel.find();
  }

  async findOne(id: string) {
    const objectId = new Types.ObjectId(id);
    return await this.baseModel.findById(id);
  }

}
