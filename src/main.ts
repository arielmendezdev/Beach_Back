import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Server } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server: Server = app.getHttpAdapter().getInstance();

  app.useGlobalPipes( new ValidationPipe({
    whitelist: true
  }))

  app.enableCors()

  // app.setGlobalPrefix('api/v1') // Esto es para asignarle a todas las urls el prefijo

  await app.listen(process.env.PORT ?? 3000);

  return server;
}

export default bootstrap();