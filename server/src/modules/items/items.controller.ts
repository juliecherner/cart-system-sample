import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Res,
  Param,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { BaseController } from '../base/base.controller';
import { BaseService } from '../base/base.service';
import { ItemModel } from './item.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';
import {Types} from "mongoose";

@ApiTags('Items routes')
@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemService: BaseService<ItemModel, CreateItemDto>,
  ) {}

  @Get()
  async find(@Res({ passthrough: true }) response: Response) {
    (response as any).cookie("uid", new Types.ObjectId());
    return await this.itemService.findAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth('default')
  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createDto: CreateItemDto) {
    return this.itemService.create(createDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(id);
  }
}
