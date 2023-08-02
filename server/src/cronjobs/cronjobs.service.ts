import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { OrdersService } from '../modules/order/orders.service';
@Injectable()
export class CronjobsService {
  constructor(private readonly ordersService: OrdersService) {}

  @Cron(CronExpression.EVERY_WEEK, {
    name: 'orders without users',
    timeZone: 'Asia/Jerusalem',
  })
  async deleteOrdersWithoutUserId() {
	await this.ordersService.deleteWithoutUsersId();
  }
}
