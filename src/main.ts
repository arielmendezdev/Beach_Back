import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( new ValidationPipe({
    whitelist: true
  }))

  // app.setGlobalPrefix('api/v1') // Esto es para asignarle a todas las urls el prefijo

  await app.listen(process.env.PORT ?? 3000);
}

export default bootstrap();