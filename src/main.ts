import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const config = require('config');
const port: number = config.get('port');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });
  await app.init();
  await app.listen(port);
  console.log(`API Gateway started on port: ${port}`);
}
bootstrap();
