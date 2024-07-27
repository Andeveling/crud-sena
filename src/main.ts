import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Como puedo validar la conexión con la base de datos?
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
