import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), AuthModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
