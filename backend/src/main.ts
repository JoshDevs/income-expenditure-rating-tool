import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Income & Expenditure Rating')
    .setDescription(
      'This is a simple api that will allow you to calculate an income and expenditure rating',
    )
    .setVersion('1.0')
    .addTag('incomeAndExpenditureRating')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(10000);
};

bootstrap();
