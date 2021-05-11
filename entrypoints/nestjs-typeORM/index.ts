import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';

import { ApplicationModule } from './app.module';

const main = async () => {
  await createConnection()

  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4000, () => console.log('server started on http://localhost:4000/graphql'));
}

main();
