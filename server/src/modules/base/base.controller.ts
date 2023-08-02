import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BaseService } from './base.service';

export abstract class BaseController<TModel, TCreateDto, TUpdateDto> {
  constructor(
    private readonly baseService: BaseService<TModel, TCreateDto>,
  ) { }

  @Post()
  create(@Body() createDto: TCreateDto) {
    return this.baseService.create(createDto);
  }

  @Get()
  findAll() {
    return this.baseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseService.findOne(id);
  }
}
