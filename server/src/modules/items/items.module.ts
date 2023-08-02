import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModel, ItemSchema } from './item.model';
import { BaseService } from '../base/base.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: ItemModel.name, schema: ItemSchema }]),
  ],
  controllers: [ItemsController],
  providers: [
    {
      provide: BaseService,
      useClass: ItemsService,
    },
  ],
})
export class ItemsModule { }
