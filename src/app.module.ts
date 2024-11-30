import { Module } from '@nestjs/common';
import { TypedBodyController } from './app.controller';

@Module({
  imports: [],
  controllers: [TypedBodyController],
  providers: [],
})
export class AppModule {}
