import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'production') {
    app.useLogger(['error', 'warn']);
  } else {
    app.useLogger(['log', 'debug', 'error', 'warn', 'verbose']);
  }

  app.useGlobalPipes( new ValidationPipe({
    whitelist: true
  }))

  await app.listen(process.env.PORT ?? 3000);
}

export default bootstrap();