import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Headers,
  Res,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { BaseService } from '../base/base.service';
import { OrderModel } from './order.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../guards/auth.guard';
import { RequestWithCookie } from './request.type';

@ApiTags('Orders routes')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly orderService: BaseService<OrderModel, CreateOrderDto>,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createDto: CreateOrderDto) {
    return this.orderService.create(createDto);
  }

  @Put()
  update(@Body() createDto: CreateOrderDto) {
    return this.orderService.create(createDto);
  }

  // @ApiBearerAuth('default')
  // @UseGuards(AuthGuard)
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    (response as unknown as RequestWithCookie).cookie(
      'cart_system',
      'cookie value',
    );
    return this.orderService.findOne(id);
  }
}
