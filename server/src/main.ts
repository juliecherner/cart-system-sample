import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';

const swaggerSetup = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .addBearerAuth(
      {
        type: 'http',
      },
      'default',
    )
    .setTitle('Cart API')
    .setDescription('Basic cart functionality')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerSetup(app);
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: true,
  });
  await app.listen(5000);
}

bootstrap();
