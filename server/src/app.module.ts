import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenMiddleware } from './modules/auth/token.middleware';
import { ItemsModule } from './modules/items/items.module';
import { OrdersModule } from './modules/order/orders.module';
import { UsersModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CronjobsModule } from './cronjobs/cronjobs.module';
import CoreModule from './modules/core.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env' }),
    MongooseModule.forRoot(
      process.env.MONGO_ATLAS_URL,
    ),
    ScheduleModule.forRoot(),
    ItemsModule,
    OrdersModule,
    UsersModule,
    AuthModule,
    CoreModule,
    CronjobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes('*');
  }
}
