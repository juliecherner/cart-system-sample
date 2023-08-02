import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemModel } from './item.model';
import { BaseService } from '../base/base.service';
@Injectable()
export class ItemsService extends BaseService<
  ItemModel,
  CreateItemDto
> {
  constructor(
    @InjectModel(ItemModel.name) private readonly itemModel: Model<ItemModel>,
  ) {
    super(itemModel);
  }
}
