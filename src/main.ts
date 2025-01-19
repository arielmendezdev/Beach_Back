import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.useGlobalPipes( new ValidationPipe({
    whitelist: true
  }))

  // app.setGlobalPrefix('api/v1') // Esto es para asignarle a todas las urls el prefijo

  await app.listen(process.env.PORT ?? 3000);
}

export default bootstrap();