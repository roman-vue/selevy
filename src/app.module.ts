import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env ', isGlobal:true}),DatabaseModule,UsersModule, AuthModule],
})
export class AppModule {}
